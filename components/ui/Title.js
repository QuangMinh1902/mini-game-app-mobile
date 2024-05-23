import { StyleSheet,Text } from "react-native";
import Colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
  },
});
