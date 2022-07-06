import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, FlatList, Image, ImageBackground,WebFont } from 'react-native';
import exercisesAll from './exercisesAll';
import exercisesDetails from './exerciseDetails.js';


//navigatie
const Stack = createStackNavigator();


//De navigatie voor de lijst naar details
const ExerciseScreen = () =>{
  return(
    <Stack.Navigator 
                      initialRouteName="Home" >
        <Stack.Screen name="Home" 
                      component={exercisesAll}  
                      options={{title: 'Exercises', 
            }} />
        <Stack.Screen 
                      name="exerciseDetails" 
                      component={exercisesDetails} 
                      options={{title: 'Details', 
            }}  />
    </Stack.Navigator>
  );
}




export default ExerciseScreen;