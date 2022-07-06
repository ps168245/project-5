import {View, Text, StyleSheet, Linking } from 'react-native'


export default function Aboutus() {
    return (
        <View style={styles.container}>

            <Text style={styles.headertext}>About us</Text>
            <Text style={styles.subHeaderText}>Feel free to read all about us!</Text>
            <Text style={[styles.secondHeader, styles.bold]} >What is this app made for?</Text>
            <Text style={styles.secondHeaderText}>In this app you can read all about the exercises! You can learn how to use them and add them to your exercise program. They are made step by step.</Text>
            <Text style={[styles.textWithoutLink, styles.bold]}>For more info please check our website:</Text>
            <Text style={[styles.textWithoutLink, styles.underline, styles.colorBlueLink]}
      onPress={() => Linking.openURL('http://Summacollege.nl')}>
  http://Summacollege.nl
</Text>
            <Text style={styles.versionOfApplicationText}>App version number: </Text>
            <Text style={styles.versionOfApplicationText}>5.2.0 Beta</Text>
        </View>
    )
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
    
    color: '#f9009a',
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