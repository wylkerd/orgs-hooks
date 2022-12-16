import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/telas/Home';

function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  )
}

export default App;

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})
