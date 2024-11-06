import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../theme/colors';

const SecondaryButton = ({ children, onPress, type }) => {
  return (
    <View style={styles.viewContainer}>
      <Pressable
        style={styles.pressableContainer}
        onPress={onPress}
        android_ripple={{
          color: Colors.secondary2,
          borderless: true,
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  viewContainer: {
    borderRadius: 50,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 24,
    backgroundColor: Colors.secondary,
  },
  pressableContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'open-sans',
  },
});
