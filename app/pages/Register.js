import React, {useState} from "react";
import { SafeAreaView, Text, View} from "react-native";
import { StyleSheet } from "react-native";

import ButtonWidget from "../widgets/ButtonWidget";
import TextfieldWidget from "../widgets/TextfieldWidget";
import Registercntrl from "../controller/RegisterController";



   
const Register = ({navigation}) => {
  
  //set variabel
  const {emailRegister, setEmailRegister, passwordRegister, setPasswordRegister, onSubmitRegister, confirmPasswordRegister, setConfirmPasswordRegister} = Registercntrl();

  return (
    <SafeAreaView style={styles.container}>
      {/* Headers */} 
      <Text style={styles.registerText}>Register</Text>

      {/* Body */}

      <TextfieldWidget 
        label='Email'
        placeholder='Masukkan Email'
        value={emailRegister}
        onChangeText={value => setEmailRegister(value)}
        keyboardType={'email-address'}
      />
      <TextfieldWidget 
        label='Password'
        placeholder='Masukkan Password'
        value={passwordRegister}
        onChangeText={value => setPasswordRegister(value)}
        secureTextEntry={true}
      />
      <TextfieldWidget 
        label='Confirm Password'
        placeholder='Masukkan Confirm Password'
        value={confirmPasswordRegister}
        onChangeText={value => setConfirmPasswordRegister(value)}
        secureTextEntry={true}
      />

      <ButtonWidget
        label='Register'
        onPress={onSubmitRegister}
        
      />

      {/* Footers */}

      <View style={styles.foot}>
        <Text>Sudah punya akun?</Text>
        <Text style={styles.footText}
        onPress={() => navigation.navigate('Login')}
        >Login</Text>
      </View>
    </SafeAreaView>
  )
}

export default Register


// Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24
  },
  registerText: {
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