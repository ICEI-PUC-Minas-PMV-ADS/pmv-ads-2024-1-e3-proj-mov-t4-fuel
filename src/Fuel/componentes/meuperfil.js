import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper'; // Importe o Appbar do react-native-paper
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MeuPerfil = () => {
   const [imagemPerfil, setImagemPerfil] = useState(null);
   const [email, setEmail] = useState('');
   const [telefone, setTelefone] = useState('');
   const [nome, setNome] = useState('');

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

         <Text style={styles.textMeuPerfil}>Meu Perfil</Text>


         <TouchableOpacity style={styles.buttonSair} onPress={() => Alert.alert('Sair')}>
            <Image source={require('../Img/Icones/logout.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
            <Text style={styles.buttonSairText}>Sair</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.ContainerIcoFoto} onPress={selecionarImagem}>
            {imagemPerfil ? (
               <Image source={{ uri: imagemPerfil }} style={styles.icoFoto} />
            ) : (
               <Image source={require('../Img/Icones/addfoto.png')} style={styles.icoFoto} />
            )}
         </TouchableOpacity>

         <TextInput //Campo Nome
            style={styles.input}
            placeholder='Nome'
            onChangeText={text => setNome(text)}
            value={nome}
         />

         <TextInput //Campo Telefone
            style={styles.input}
            placeholder='Telefone'
            onChangeText={text => setTelefone(text)}
            value={telefone}
         />

         <TextInput //Campo Email
            style={styles.input}
            placeholder='E-mail'
            onChangeText={text => setEmail(text)}
            value={email} 
         />

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

   // Parte principal da tela, parte abaixo do ico Foto.
   container: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff',
   },

   //Logo Fuel
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

   //Icone Menu
   menuContainer: {
      marginLeft: 15,
   },

   menu: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
   },
   //Icone Configurações
   configContainer: {
      marginRight: 15,
   },

   config: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
   },
   //Texto "meu perfil"
   textMeuPerfil: {
      fontSize: 45,
      fontWeight: 'bold',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      color: '#272727',
      marginTop: 2,
   },

   //Input Nome/Telefone/Email
   input: {
      
      height: 50, // altura do campo
      width: 350, //largura do campo
      margin: 20, //espaço entre os campos
      borderWidth: 2, //Borda da linha
      padding: 10,
      borderRadius: 35, //Arrendondando o campo
      backgroundColor: '#EDEDED', //cor de fundo

   },
   //Botão de Sair/Logout
   buttonSair: {
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
   //Texto do Botão Sair/Logout
   buttonSairText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
   },
   //Container da parte onde esta o icone da foto
   ContainerIcoFoto: {
      marginTop: 20,
   },
   //Icone de Add Foto
   icoFoto: {
      width: 70,
      height: 70,
   },
   //Rodapé
   footer: {
      width: '100%', //ajusta a largura do container rodape
      height: '10%',//ajusta a altura do container rodape
      backgroundColor: '#00052F',
      justifyContent: 'center', //Centraliza Verticalmente
      alignItems: 'center', //Centraliza Horizontalmente
      bottom: 0,
      paddingBottom: 5,
      position: 'absolute',
      flexDirection: 'row', // Deixa os itens flexivel, 'row'vai deixa-los horizontalmente.
   },
   //icones do rodapé
   iconbar: {
      marginHorizontal: 25,
   },
});

export default MeuPerfil;
