import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';
import { Appbar } from 'react-native-paper'; // Importe o Appbar do react-native-paper
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MeuPerfil = () => {
   const [imagemPerfil, setImagemPerfil] = useState(null);

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
            <TouchableOpacity onPress={() => console.log('Menu clicado')} style={styles.menuContainer}>
               <Image source={require('../Img/Icones/menu.png')} style={styles.menu} />
            </TouchableOpacity>

            <Image source={require('../Img/Logo/LogoP.png')} style={styles.logo} />

            <TouchableOpacity onPress={() => console.log('Configurações clicadas')} style={styles.configContainer}>
               <Image source={require('../Img/Icones/config.png')} style={styles.config} />
            </TouchableOpacity>
         </View>

         <Text style={styles.text}>Meu Perfil</Text>

         <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Sair')}>
            <Image source={require('../Img/Icones/logout.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
            <Text style={styles.buttonText}>Sair</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.imageContainer} onPress={selecionarImagem}>
            {imagemPerfil ? (
               <Image source={{ uri: imagemPerfil }} style={styles.image} />
            ) : (
               <Image source={require('../Img/Icones/addfoto.png')} style={styles.image} />
            )}
         </TouchableOpacity>

         <Appbar style={styles.footer}>
            <Appbar.Action icon={require('../Img/Icones/homepage.png')} color="white" size={36} onPress={() => console.log('Home clicado')} style={styles.iconbar} />
            <Appbar.Action icon={require('../Img/Icones/favorito.png')} color="white" size={36} onPress={() => console.log('Favoritos clicado')} style={styles.iconbar} />
            <Appbar.Action icon={require('../Img/Icones/mapa.png')} color="white" size={36} onPress={() => console.log('Mapa clicado')} style={styles.iconbar} />
            <Appbar.Action icon={require('../Img/Icones/perfil.png')} color="white" size={36} onPress={() => console.log('Perfil clicado')} style={styles.iconbar} />
         </Appbar>

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
      height: '13%',
      backgroundColor: '#00052F',
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   logo: {
      width: '45%',
      height: '350%',
      resizeMode: 'center',
      alignItems: 'center',
   },
   menuContainer: {
      marginLeft: 15,
   },
   menu: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
   },
   configContainer: {
      marginRight: 15,
   },
   config: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
   },
   text: {
      fontSize: 45,
      fontWeight: 'bold',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      color: '#272727',
      marginTop: 2,
   },
   button: {
      flexDirection: 'row',
      width: '40%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'red',
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      marginVertical: 85,
   },
   buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
   },
   imageContainer: {
      marginTop: 20,
   },
   image: {
      width: 70,
      height: 70,
   },
   footer: {
      width: '100%',
      height: '10%',
      backgroundColor: '#00052F',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      paddingBottom: 5,
      position: 'absolute',
      flexDirection: 'row',
   },
   iconbar: {
      marginHorizontal: 25,
   },
});

export default MeuPerfil;
