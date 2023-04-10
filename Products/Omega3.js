import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
const productImage = require('../images/logo.png');
import { AntDesign,Ionicons } from '@expo/vector-icons'; 





<Image source={{uri:"https://th.bing.com/th/id/R.b21bf56148b7619119a053c19a8b904e?rik=8rKX2jxnETxdvQ&pid=ImgRaw&r=0"}} style={{ width: 200, height: 200 }} />

export default class Omega3 extends Component {
  constructor(props) {
    super(props);

    this.state = {                                                                          
      name: 'Omega 3',
      price: '1000',
      description: 'This is a beautiful gemstone.',
    };
  }


  render() {
    return (
      <View style={styles.container}>
       {/* code  */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#303030'
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color:'white'
  },
  description: {
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 20,
    color:'white'
  },
  button: {
    backgroundColor: '#FF7F50',
    marginBottom: 40,
    color:'white'
  },
});