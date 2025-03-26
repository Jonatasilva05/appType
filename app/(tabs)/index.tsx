import { StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

// import EditScreenInfo from '@/components/EditScreenInfo';
import { useState } from 'react';

// Icones
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [verSenha, setVerSenha] = useState(false);
  const exibirSenhaDigitada = () => {
    setVerSenha(!verSenha);
  }

  return (
    <View style={ styles.container }>

      {/* PRIMEIRO INPUT DA TELA DE LOGIN */}
      <View>
        <Text style={ styles.viewText }>Usuário: </Text>
        <Text style={ styles.quebraLinha }></Text>
        <TextInput style={ styles.textInput } placeholder='Digite seu Usuário...' placeholderTextColor="#D3D3D3" />
      </View>

        {/* QUEBRA DE LINHA ENTRE O PRIMEIRO E SEGUNDO INPUT DA TELA DE LOGIN */}
        <Text style={ styles.quebraLinha }></Text>

      {/* SEGUNDO INPUT DA TELA DE LOGIN */}
      <View>
        <Text style={ styles.viewText }>Senha: </Text>
        <Text style={ styles.quebraLinha }></Text>
        <TextInput style={ styles.textInput } placeholder='Digite sua Senha....' placeholderTextColor="#D3D3D3" secureTextEntry={!verSenha} />
        <TouchableOpacity onPress={exibirSenhaDigitada} style={ styles.iconCont }>
          <Ionicons name={ verSenha ? 'eye-off' : 'eye' } size={24} color="black"></Ionicons>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={ styles.button }>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText: {
    fontSize: 20,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 150,
  },
  quebraLinha: {
    backgroundColor: 'transparent',
    height: 50,
  },
  iconCont: {
    position: 'absolute',
    right: -30,
    top: 86,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
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