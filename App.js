import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import AuthRouters from './app/routers/AuthRouters';
import { Home } from './app/pages';
import AppController from './app/controller/AppController';
import PageRouters from './app/routers/PageRouters';


export default function App() {
  //Get variable user
 const {currentUser} = AppController;
 console.log(currentUser);
  return (
    <NavigationContainer>
      {/* check already login */}
     {currentUser ? <PageRouters/> : <AuthRouters/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
