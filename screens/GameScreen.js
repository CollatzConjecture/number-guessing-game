import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import NumberContainer from "../components/game/NumbeContainer";
import Title from "../components/ui/Title";
import Colors from "../contants/color";

function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber}) {
  const initialGuess = generateRandomNumber(1,100, userNumber);
  const [curretGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
      <NumberContainer>{curretGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        + -
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    }
})