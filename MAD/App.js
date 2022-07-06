import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ExerciseScreen from './components/exerciseScreen';
import aboutus from './components/aboutus';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#f9009a',
        inactiveTintColor: '#F0ADBC',
        activeBackgroundColor: '#f9009a',
        inactiveBackgroundColor: '#DA7F7F',
            style: {
                  backgroundColor: '#F0AF78',
                  paddingBottom: 3
                  
            }
     }}>
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
