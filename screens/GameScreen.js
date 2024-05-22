import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or lower ?</Text>
        {/* +- */}
      </View>
      {/* <View>Log rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

 
});
