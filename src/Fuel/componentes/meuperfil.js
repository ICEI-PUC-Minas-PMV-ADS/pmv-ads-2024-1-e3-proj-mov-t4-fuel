import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const MeuPerfil = () => {
   const [imagemPerfil, setImagemPerfil] = useState(null);

   const tamanhoTela = Dimensions.get('window').width;

   const selecionarImagem = () => {
      ImagePicker.launchImageLibrary({}, resposta => {
         if (resposta.didCancel) {
            console.log('Seleção de imagem cancelada');
         } else if (resposta.error) {
            console.log('Erro ao selecionar imagem:', resposta.error);
         } else {
            setImagemPerfil(resposta.uri);
         }
      });
   };

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

         <TouchableOpacity style={styles.imageContainer} onPress={selecionarImagem}>
            {imagemPerfil ? (
               <Image source={{ uri: imagemPerfil }} style={styles.image} />
            ) : (
               <Image
                  source={require('../Img/Icones/addfoto.png')}
                  style={styles.image}
               />
            )}
         </TouchableOpacity>

      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      backgroundColor: '#ffffff',
   },
   logoContainer: {
      width: '100%',
      height: '10%',
      backgroundColor: '#00052F',
      justifyContent: 'center',
      alignItems: 'center',
   },
   logo: {
      width: '45%',
      height: '350%',
      resizeMode: 'contain',
   },
   text: {
      fontSize: 45,
      fontWeight: 'bold',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      color: '#272727',
      marginTop: 10,
   },
   button: {
      flexDirection: 'row',
      width: '50%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'red',
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
   },
   buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
   },
   imageContainer: {
      marginTop: 50,
   },
   image: {
      width: 100,
      height: 100,
   },
});

export default MeuPerfil;