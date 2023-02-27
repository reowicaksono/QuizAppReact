
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateQuestion, CreateQuiz, Home, PlayQuiz, Results, Testdata } from '../pages';




const Stack = createStackNavigator();

const PageRouters = () => {
  return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateQuiz" component={CreateQuiz} />
        <Stack.Screen name="CreateQuestion" component={CreateQuestion} />
        <Stack.Screen name="PlayQuiz" component={PlayQuiz} />
        <Stack.Screen name="Testdata" component={Testdata} />
        <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

export default PageRouters;