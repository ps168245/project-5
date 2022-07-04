import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/stack';
import exercisesAll from './exercisesAll';

//navigatie
const Stack = createNativeStackNavigator();

//Uiterlijk
const ExerciseScreen = () => {
    return (
  <ExStack />
    );
}
//De paginas
const ExStack = () =>{
return(
  <Stack.Navigator 
                    initialRouteName="exerciseAll" >
      <Stack.Screen name="Home" 
        	          component={exercisesAll}  
                    options={{title: 'Oefeningen', 
          }} />
      <Stack.Screen 
                    name="exerciseDetails" 
                    component={exerciseDetails} 
                    options={{title: 'Details', 
          }}  />
  </Stack.Navigator>
  );
}



export default ExerciseScreen