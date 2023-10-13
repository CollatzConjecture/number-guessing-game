import { Text, StyleSheet } from "react-native";

import Colors from "../../contants/color";

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    }
})