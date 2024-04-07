import React, {useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//importações dos componentes "tela".
import TelaInicial from "./componentes/telainicial";
import MeuPerfil from './componentes/meuperfil';  
const App = () => {
 const [showTelaInicial, setShowTelaInicial] = useState(true);
 useEffect(( ) => {
   setTimeout(() => {
     setShowTelaInicial(false);
   }, 2000); //Tempo de 2 segundos
 }, []);
 return (
<View style={styles.container}>
       {showTelaInicial ? <TelaInicial /> : <MeuPerfil />}
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