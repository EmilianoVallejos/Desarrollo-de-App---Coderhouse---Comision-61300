import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuarios from './src/components/Usuarios';


export default function App() {
  return (
    <View style={{paddingTop: 20, paddingLeft: 25}}>
      <Text>HOLA CODER!</Text>
      <Text>Emiliano Vallejos - Coderhouse Comision 61300</Text>
      <Usuarios/>
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
