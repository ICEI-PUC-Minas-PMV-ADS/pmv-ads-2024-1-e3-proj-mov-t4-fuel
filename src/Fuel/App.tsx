import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import TelaInicial from "./componentes/telainicial";


const App = () => {

  return (

    <View style= {styles.container}>
      <TelaInicial />
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBCD04',

  }
});

export default App;
