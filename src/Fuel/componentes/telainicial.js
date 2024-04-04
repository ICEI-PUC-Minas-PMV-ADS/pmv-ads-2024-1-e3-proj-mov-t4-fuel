import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TelaInicial = () => {
    
  return (
<>
    <Image style={styles.logo}
      source={require('../Img/Logo/LogoG.png')}
      
    />
    <Text style={styles.text}>Bem-vindo ao Fuel+</Text>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBCD04',
  },

  logo: {
    width: 2000, // Largura
    height: 200, // Altura
  },
  
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  
});

export default TelaInicial;

