import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { Link, Stack } from 'expo-router';

// import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={ styles.container }>
      <View style={ styles.viewUsuario}>
        <Text>
          Digite sua Senha: <TextInput placeholder='Digite seu Usuário' />
        </Text>
        <Text>
          Digite sua Senha: <TextInput placeholder='Digite sua Senha' />
        </Text>
      </View>
      <Link href="/(tabs)/login" style={ styles.button }> Não tem conta? Cadastre-se! </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewUsuario: {
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

  // VIEW PRIMORDIAL(assim que baixa o arquivo)
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
    //
   //STYLE PRIMORDIAL
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // title: {
    //   fontSize: 20,
    //   fontWeight: 'bold',
    // },
    // separator: {
    //   marginVertical: 30,
    //   height: 1,
    //   width: '80%',
    // },