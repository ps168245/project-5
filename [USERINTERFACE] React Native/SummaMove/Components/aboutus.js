import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, FlatList, Image, url, ImageBackground,WebFont } from 'react-native';
import React, { Component } from 'react';



const Aboutus = () => {
    return (
  <View style={styles.container}>
    <Text>Aboutus Page</Text>
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
  
  headertext:{

    position: 'absolute',
    width: 360,
    height: 44,
    left: 0,
    top: 117,
    
    
    fontStyle: normal,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: 44,
    /* identical to box height */
    
    display: flex,
    alignitems: center,
    textalign: center,
    
    color: FFFFFF,
    
    borderWidth: 1,
    borderStyle: solid,
    borderColor: 000000,



  }

});


export default aboutus