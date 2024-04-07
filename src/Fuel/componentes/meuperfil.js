import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';

const MeuPerfil = () => {
   const tamanhoTela = Dimensions.get('window').width;

   return (
      <View style={styles.container}>
         <View style={styles.logoContainer}>
            <Image
               source={require('../Img/Logo/LogoP.png')}
               style={styles.logo}
            />
         </View>

         <Text style={styles.text}>Meu Perfil</Text>

         <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Sair')}>
            <Image
               source={require('../Img/Icones/logout.png')}
               style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={styles.buttonText}>Sair</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-start', //Centraliza verticalmente
      alignItems: 'center', // Centraliza horizontalmente
      backgroundColor: '#ffffff',
   },
   logoContainer: {
      width: '100%', // Ajuste largura do container
      height: '10%', // Ajuste altura do container
      backgroundColor: '#00052F',
      justifyContent: 'center', // Centraliza verticalmente
      alignItems: 'center', // Centraliza horizontalmente
   },
   logo: {
      width: '45%', // Ajuste largura do container
      height: '350%',// Ajuste altura do container
      resizeMode: 'contain', // Ajusta a imagem para caber dentro do contêiner mantendo a proporção
   },
   text: {
      fontSize: 45,
      fontWeight: 'bold',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      color: '#272727',
   },
   button: {
      flexDirection: 'row',
      width: '50%', //tamanho vertical
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'red',
      borderRadius: 35, //arredondar botao
      justifyContent: 'center',
      alignItems: 'center', //centralizar botao verticalmente
      position: 'absolute',
      bottom: 20, //deixar botao na parte inferior
   },
   buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
   },
});

export default MeuPerfil;
