import React from "react";
import { SafeAreaView, Text, View} from "react-native";
import { StyleSheet } from "react-native";
import LoginController from "../controller/LoginController";


import ButtonWidget from "../widgets/ButtonWidget";
import TextfieldWidget from "../widgets/TextfieldWidget";
   
const Login = ({navigation}) => {
  //get variable
  const {emailLogin, setEmailLogin, passwordLogin, setPasswordLogin, onSubmitLogin} = LoginController();
 
  return (
    <SafeAreaView style={styles.container}>
      {/* Headers */} 
      <Text style={styles.loginText}>Login</Text>

      {/* Body */}

      <TextfieldWidget 
        label='Email'
        placeholder='Masukkan Email'
        value={emailLogin}
        onChangeText={value => setEmailLogin(value)}
        keyboardType={'email-address'}
      />
      <TextfieldWidget 
        label='Password'
        placeholder='Masukkan Password'
        value={passwordLogin}
        onChangeText={value => setPasswordLogin(value)}
        secureTextEntry={true}
      />

      <ButtonWidget
        label='Login'
        onPress={onSubmitLogin}
        
      />

      {/* Footers */}

      <View style={styles.foot}>
        <Text>Belum punya akun?</Text>
        <Text style={styles.footText}
        onPress={() => navigation.navigate('Register')}
        >Daftar</Text>
      </View>
    </SafeAreaView>
  )
}

export default Login


// Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 32
  },
  foot: {
    flexDirection: 'row', 
    marginTop: 20, 
    alignItems: 'center'
  },
  footText: {
    color: '#FFC700', 
    fontWeight: 'bold',
     marginLeft: 8
  }
});