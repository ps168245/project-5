import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, FlatList, Image, url, ImageBackground,WebFont } from 'react-native';
import React, { Component } from 'react';


const Homepage = () => {
    return (
  <View style={styles.container}>
  <Text>home Page</Text>
    </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    /* Background */
  
  BackgroundStyle:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    left: 0,
    top: 0,
    
  },
  

});


export default Homepage