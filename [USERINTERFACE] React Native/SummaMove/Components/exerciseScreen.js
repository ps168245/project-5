import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, FlatList, Image, url, ImageBackground,WebFont } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ExerciseScreen = () => {
    return (
  <View style={styles.container}>

    </View>
    );
}

function List ({navigation})  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getExercises = async () => {
    try {
      const response = await fetch('https://gameapi-aba23-default-rtdb.firebaseio.com/.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getExercises();
  }, []);
    return (
        <View style={styles.list}>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList horizontal={false} numColumns={2}
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => navigation.navigate('Details', {
                          id: item.id,
                          name: item.Name,
                          description: item.Description,
                      })}>
                        <View style={styles.item}>
                            <View>
                                <AntDesign name='heart' size={15} color={'#D96B55'}/>
                            </View>
                            <View>

                            </View>
                          <Text style={styles.itemtext}>{item.Name}</Text>
                        </View>
                      </TouchableOpacity>
                  )}
              />
          )}s
        </View>
    );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function Details({ route }) {

  const { name, description } = route.params;

  return (
      <View style={{backgroundColor: '#FCCAD2', flex: 1, padding: 10 }}>
          <View style={{}}>
              <Text style={{marginTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#DA624E'}}>{name}</Text>
              <Text style={{marginTop: 20, padding: 10, color: '#DA624E'}}>{description}</Text>
              </View>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  
},
  item: {
      padding: 15,
      marginTop: 16,
      borderColor: '#DA6C55',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 60,
      flexDirection: 'row',
      width: 180,
      margin: 3,
      height: 65,
  },
  itemtext: {
      color: '#DA624E',
      marginLeft: 10,
  },

  list: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F0C7C5',
  },
  content: {
      padding: 40,
      flex: 1,
  },
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'stretch', },
imageBackground:{ flex: 1, justifyContent: 'center', alignItems: 'center', },
text: { fontSize: 25, fontStyle: 'italic', color: 'purple', textAlign: 'center', },

});

export default ExerciseScreen