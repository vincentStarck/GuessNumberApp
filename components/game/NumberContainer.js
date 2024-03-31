import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={style.container}>
      <Text style={style.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",

    // fontWeight:"bold"
  },
});
