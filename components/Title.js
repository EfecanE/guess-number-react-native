import { StyleSheet, Text, View } from 'react-native';

const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#ddb52f',
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: '#ddb52f',
    textAlign: 'center',
  },
});
