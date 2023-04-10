import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
const productImage = require('../images/logo.png');
import { AntDesign,Ionicons } from '@expo/vector-icons'; 





<Image source={{uri:"https://i.pinimg.com/originals/e8/58/44/e858448a81401fb14e81c50523dc661e.jpg"}} style={{ width: 200, height: 200 }} />

export default class FitEquipment extends Component {
  constructor(props) {
    super(props);

    this.state = {                                                                          
      name: 'Gloves with Wrist Support - Black',
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