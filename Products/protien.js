import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
const productImage = require('../images/logo.png');
import { AntDesign,Ionicons } from '@expo/vector-icons'; 





<Image source={{uri:"https://th.bing.com/th/id/R.ba10b128d0609664b7584f22339e67f2?rik=700FWvSyGm4hqQ&riu=http%3a%2f%2fwww.gnc.com%2fdw%2fimage%2fv2%2fBBLB_PRD%2fon%2fdemandware.static%2f-%2fSites-master-catalog-gnc%2fdefault%2fdwda4f9cec%2fhi-res%2f350260_1.jpg%3fsw%3d2000%26sh%3d2000%26sm%3dfit&ehk=T%2f%2bmq9fLSZKLRd%2fd5POrcc3YvUzityyhQLpjhpprUtc%3d&risl=&pid=ImgRaw&r=0"}} style={{ width: 200, height: 200 }} />

export default class Protien extends Component {
  constructor(props) {
    super(props);

    this.state = {                                                                          
      name: 'whey protien',
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