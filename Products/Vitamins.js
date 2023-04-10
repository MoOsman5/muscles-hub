import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
const productImage = require('../images/logo.png');
import { AntDesign,Ionicons } from '@expo/vector-icons'; 





<Image source={{uri:"https://th.bing.com/th/id/OIP.9vmvegcIwDT_gz1aucdpQQHaHa?pid=ImgDet&rs=1"}} style={{ width: 200, height: 200 }} />

export default class Carb extends Component {
  constructor(props) {
    super(props);

    this.state = {                                                                          
      name: 'Multivitamins',
      price: '1000',
      description: 'This is a beautiful gemstone.',
    };
  }


  render() {
    return (
      <View style={styles.container}>
        {/* <Ionicons name="ios-arrow-back" size={24} color="white" style={styles.back} onPress={()=>navigation.navigate('Shop')} /> */}

        <Image source={{uri:"https://th.bing.com/th/id/OIP.9vmvegcIwDT_gz1aucdpQQHaHa?pid=ImgDet&rs=1"}} style={{ width: 200, height: 200  , marginTop: 20}} />
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.price}>{this.state.price}</Text>
        <Text style={styles.description}>{this.state.description}</Text>
        <Button
          title="Add to Cart"
          icon={<Icon name="shopping-cart" color="white" />}
          onPress={() => console.log('Add to cart')}
          buttonStyle={styles.button}
        />
        <Image source={{uri:"https://th.bing.com/th/id/OIP.9vmvegcIwDT_gz1aucdpQQHaHa?pid=ImgDet&rs=1"}} style={{ width: 200, height: 200 , marginTop: 20 }} />
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.price}>{this.state.price}</Text>
        <Text style={styles.description}>{this.state.description}</Text>
        <Button
          title="Add to Cart"
          icon={<Icon name="shopping-cart" color="white" />}
          onPress={() => console.log('Add to cart')}
          buttonStyle={styles.button}
        />

        <Image source={{uri:"https://th.bing.com/th/id/OIP.9vmvegcIwDT_gz1aucdpQQHaHa?pid=ImgDet&rs=1"}} style={{ width: 200, height: 200 , marginTop: 20}} />
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.price}>{this.state.price}</Text>
        <Text style={styles.description}>{this.state.description}</Text>
        <Button
          title="Add to Cart"
          icon={<Icon name="shopping-cart" color="white" />}
          onPress={() => console.log('Add to cart')}
          buttonStyle={styles.button}
        />
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