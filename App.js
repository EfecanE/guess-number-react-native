import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import Colors from './theme/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [loaded, error] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundAmount, setRoundAmount] = useState(0);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  handleGameIsOver = (isOver) => {
    setGameIsOver(isOver);
  };

  handleGenerateRandomNumber = () => {
    setRoundAmount((ra) => ra + 1);
  };

  startNewGameHandler = () => {
    setUserNumber(null);
    handleGameIsOver(false);
    setRoundAmount(0);
  };

  let screen = <StartGameScreen onPickerNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={handleGameIsOver}
        onAddRoundAmount={handleGenerateRandomNumber}
      />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        roundAmount={roundAmount}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container}
    >
      <StatusBar></StatusBar>
      <ImageBackground
        source={require('./assets/images/background.jpeg')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={[styles.container]}>
          <View style={[styles.container, styles.safeAreaView]}>{screen}</View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    padding: 24,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
