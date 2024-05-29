import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess]);

  function generateRandomBetween(minBoundary, maxBoundary, exclude) {
    const rndNum =
      Math.floor(Math.random() * (maxBoundary - minBoundary)) + minBoundary;

    if (rndNum === exclude) {
      return generateRandomBetween(minBoundary, maxBoundary, exclude);
    } else {
      return rndNum;
    }
  }

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    let nextGuessNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(nextGuessNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Entypo name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>Log rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },

  instructionText: {
    marginBottom: 12,
  },
});
