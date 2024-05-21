import { TextInput, Button, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"numeric"}
        autoCapitalize={"none"}
        autoCorrect={"false"}
      />
      <View style={styles.buttonsContainer}>
        <View style= {styles.buttonContainer}>
          <PrimaryButton> Confirm</PrimaryButton>
        </View>
        <View style= {styles.buttonContainer}>
          <PrimaryButton> Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#520637",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // shadow in android
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowColor: "red",
  },

  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
