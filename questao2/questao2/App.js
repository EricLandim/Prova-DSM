import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.greenSquare}>
        <Text style={styles.text}> Quadrado 1 </Text>
      </View>

      <View style={styles.blueSquare}>
        <Text style={styles.text}> Quadrado 2 </Text>
      </View>

      <View style={styles.redSquare}>
        <Text style={styles.text}> Quadrado 3 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  blueSquare: {
    backgroundColor: '#00CED1',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
   
  },
  greenSquare: {
    backgroundColor: '#00FF7F',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
  },
  redSquare: {
    backgroundColor: '#FA8072',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
  },
});