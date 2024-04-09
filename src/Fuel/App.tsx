import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importe os ícones do pacote @expo/vector-icons
import TelaInicial from './componentes/telainicial';
import MeuPerfil from './componentes/meuperfil';

const App = () => {
  const [showTelaInicial, setShowTelaInicial] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTelaInicial(false);
    }, 2000); // Tempo de 2 segundos
  }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {showTelaInicial ? <TelaInicial /> : <MeuPerfil />}
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBCD04',
  },
});

export default App;
