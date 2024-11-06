import { StyleSheet, View } from 'react-native';
import React from 'react';
import Colors from '../theme/colors';

const Box = ({ children }) => {
  return <View style={styles.box}>{children}</View>;
};

export default Box;

const styles = StyleSheet.create({
  box: {
    gap: 24,
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.primary3,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
});
