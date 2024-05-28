import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: Colors.primary800,
    padding: 16,
    marginTop: 50,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // shadow in android
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowColor: "red",
  },
});
