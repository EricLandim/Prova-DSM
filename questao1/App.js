import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Você clicou {contador}</Text>
      <Button onPress={()=>setContador(contador+1)}title = 'Click'></Button>
      <StatusBar style="auto" />
    </View>
       
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


