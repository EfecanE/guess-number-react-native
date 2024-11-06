import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  Platform,
} from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Box from '../components/Box';
import Colors from '../theme/colors';
import Title from '../components/Title';

const StartGameScreen = ({ onPickerNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  handleOnPress = (number) => {
    setEnteredNumber(number);
  };

  handleOnGuess = () => {
    console.log(Platform.OS);
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Please choose a number that a between 0 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: handleOnReset,
          },
        ]
      );
    }
    onPickerNumber(chosenNumber);
  };

  handleOnReset = () => {
    setEnteredNumber('');
  };

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Start Game!</Title>
      <View style={styles.boxContainer}>
        <Box>
          <Text style={styles.inputTitle}>Enter a number</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            maxLength={2}
            value={enteredNumber}
            onChangeText={handleOnPress}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <SecondaryButton onPress={handleOnReset}>Reset</SecondaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={handleOnGuess}>Guess</PrimaryButton>
            </View>
          </View>
        </Box>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    flex: 1,
  },
  boxContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  inputTitle: {
    fontSize: 18,
    color: Colors.secondary,
    fontFamily: 'open-sans',
  },
  input: {
    minWidth: 50,
    fontSize: 32,
    textAlign: 'center',
    color: Colors.secondary,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  button: {
    flex: 1,
  },
});
