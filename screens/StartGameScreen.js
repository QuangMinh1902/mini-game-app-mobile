import { TextInput, Button, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton> Reset</PrimaryButton>
      <PrimaryButton> Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 16,
    marginTop: 100,
  },
});
