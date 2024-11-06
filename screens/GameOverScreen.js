import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../theme/colors';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

const GameOverScreen = ({ roundAmount, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
        <Text style={styles.info}>
          Your phone needed <Text style={styles.highlight}>{roundAmount}</Text>{' '}
          rounds to guess your number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    flex: 1,
  },
  info: {
    color: Colors.secondary2,
    fontFamily: 'open-sans',
    fontSize: 12,
  },
  highlight: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'open-sans-bold',
  },
  imageContainer: {
    flex: 5,
    overflow: 'hidden',
    alignItems: 'center',
    gap: 36,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderColor: Colors.secondary,
    borderWidth: 3,
  },
});
