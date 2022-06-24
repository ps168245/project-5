import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, FlatList, Image, url, ImageBackground,WebFont } from 'react-native';
import React, { Component } from 'react';





const Aboutus = () => {
    return (
  <View style={styles.container}>

    <Text style={styles.headertext}>About us</Text>
    <Text style={styles.subHeaderText}>Feel free to read all about us!</Text>
    <Text style={[styles.secondHeader, styles.bold]} >What is this app made for?</Text>
    <Text style={styles.secondHeaderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit placerat sem sed feugiat. Suspendisse nec mi eu enim molestie fringilla sit amet sit amet libero. Sed pulvinar et neque non auctor. Proin cursus orci ut pharetra vulputate. Phasellus pretium eu elit a suscipit. Fusce rhoncus dui elit, in rhoncus lorem placerat et. Sed varius, sem non luctus elementum, diam ante lobortis neque, at consectetur neque velit non tellus. Donec hendrerit rhoncus ipsum, ut viverra sem vehicula nec.</Text>
    <Text style={[styles.textWithoutLink, styles.bold ]}>For more info please check our website:</Text><Text style={[styles.textWithoutLink,  styles.underline, styles.colorBlueLink]}> http://example.com</Text>

    <Text style={styles.versionOfApplicationText}>App version number: </Text>
     <Text style={styles.versionOfApplicationText}>5.2.0 Beta</Text>
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
  
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  colorBlueLink: {color: "#95BEEE"},

  headertext:{

    // position: 'absolute',
    // width: "100%",
    // left: 0,
     top: 117,
    
    

    // fontWeight: 600,
    fontSize: 50,
    // lineHeight: 44,
    /* identical to box height */
    
    flex: 1,
    // alignitems: 'center',
    // textalign: 'center',
    
    color: 'black',
    // marginLeft: '20%',
    // marginRight: "20%",
    // padding: 10,

    textShadowColor:'#585858',
    // textShadowOffset:{width: 2, height: 2},
    // textShadowRadius:10,

    position: 'absolute',

    // borderWidth: 1,
    // borderColor: 'thistle',
    // borderRadius: 50,

    // stroke: "black",
    // strokeWidth: "1",





  },

  subHeaderText:{
    top: -40,
    color: 'gray',
    fontSize: 18,
    opacity: 0.4,

  },

  secondHeader:{
    fontSize: 25,
    // textShadowColor:'#585858',
    // textShadowRadius:0,
    // textShadowOffset:{width: 4, height: 4},

    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5
  },

  secondHeaderText:{
    top:20,
    color:"#656565",
    textAlign: "center",
  },

  textWithoutLink:{
    top: 130,
    fontSize: 16,
  },

  versionOfApplicationText:{
    color: "#0A0909",
    opacity: 0.2,
    right:-120,
    top: 200,

  }

});


export default Aboutus 