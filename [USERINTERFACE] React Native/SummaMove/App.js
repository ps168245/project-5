import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Homepage from './Components/homepage';
import ExerciseScreen from './Components/exerciseScreen';
import About_us from './Components/aboutus';
import login from './Components/login';
import exerciseScreen from './Components/exerciseScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();




const MyTabs = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen 
      name="Exercises" 
      component={ExerciseScreen}         
      options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="check" color={color} size={26} backgroundColor={'#fff'} />
          ), }}/>
          
          <Tab.Screen
          name='Exercises'
          component={ExerciseScreen} 
          options={{ color: '#8DF0AC', 
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="list" color={'#f9009a'} size={20} />
      ), }}/>
          <Tab.Screen
          name='About us'
          component={aboutus} 
          options={{ color: '#8DF0AC',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="information-circle" color={'#f9009a'} size={20} />
      ), }} />
      </Tab.Navigator>
    
  );
}

const App = () => {
  return (
    <NavigationContainer >
      <MyTabs/>
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


export default App;
