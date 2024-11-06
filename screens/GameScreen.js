import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Colors from '../theme/colors';
import PrimaryButton from '../components/PrimaryButton';
import Box from '../components/Box';
import AntDesign from '@expo/vector-icons/AntDesign';

generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver, onAddRoundAmount }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    onGameOver(currentGuess === userNumber);
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    maxBoundary = 100;
    minBoundary = 1;
  }, []);

  nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that is a wrong direction!', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess + 1;
    } else {
      minBoundary = currentGuess;
    }

    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    onAddRoundAmount();
    setCurrentGuess(newRndNum);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.currentGuessContainer}>
        <Text style={styles.currentGuess}>{currentGuess}</Text>
      </View>
      <View style={styles.playerController}>
        <Box>
          <Text style={styles.buttonsTitle}>Higher or lower?</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <AntDesign
                name="minus"
                size={24}
                color={Colors.secondary}
              />
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <AntDesign
                name="plus"
                size={24}
                color={Colors.secondary}
              />
            </PrimaryButton>
          </View>
        </Box>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 24,
  },
  buttonsTitle: {
    color: Colors.secondary,
    fontSize: 18,
    fontFamily: 'open-sans',
  },
  playerController: {
    flex: 7,
    justifyContent: 'center',
  },
  currentGuessContainer: {
    flex: 1,
    borderWidth: 3,
    borderColor: Colors.secondary,
    padding: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentGuess: {
    color: Colors.secondary,
    fontSize: 32,
    fontFamily: 'open-sans-bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
  },
});
