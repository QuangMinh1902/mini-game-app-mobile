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
    backgroundColor: "#72062c",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // shadow in android
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowColor:'red'
  },
});
