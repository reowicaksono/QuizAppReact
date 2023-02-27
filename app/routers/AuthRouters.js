
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Login, Register,CreateQuestion,CreateQuiz,PlayQuiz,Testdata,Results  } from '../pages';

const Stack = createStackNavigator();

const AuthRouters = () => {
  return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateQuiz" component={CreateQuiz} />
        <Stack.Screen name="CreateQuestion" component={CreateQuestion} />
        <Stack.Screen name="PlayQuiz" component={PlayQuiz} />
        <Stack.Screen name="Testdata" component={Testdata} />
        <Stack.Screen name="Results" component={Results} />
        
    </Stack.Navigator>
  );
}

export default AuthRouters;