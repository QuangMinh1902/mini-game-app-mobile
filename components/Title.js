import { StyleSheet,Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d2ea1a",
    textAlign: "center",
    borderColor: "#ddb52f",
    borderWidth: 2,
    padding: 12,
  },
});
