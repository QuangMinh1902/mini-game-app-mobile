import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 30 : 36,
    fontFamily: "open-sans-bold",
  },
});
