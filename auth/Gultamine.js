import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
const productImage = require('../images/logo.png');


// ...

<Image source={productImage} style={{ width: 200, height: 200 }} />

export default class Gultamine extends Component {
  constructor(props) {
    super(props);

    this.state = {                                                                          
      name: 'Gemstone',
      price: '1000',
      description: 'This is a beautiful gemstone.',
    };
  }


  render() {
    return (
      <View style={styles.container}>
    <Image source={productImage} style={{ width: 200, height: 200  , marginTop: 20}} />
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.price}>{this.state.price}</Text>
        <Text style={styles.description}>{this.state.description}</Text>
        <Button
          title="Add to Cart"
          icon={<Icon name="shopping-cart" color="white" />}
          onPress={() => console.log('Add to cart')}
          buttonStyle={styles.button}
        />
 <Image source={productImage} style={{ width: 200, height: 200 , marginTop: 20 }} />
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.price}>{this.state.price}</Text>
        <Text style={styles.description}>{this.state.description}</Text>
        <Button
          title="Add to Cart"
          icon={<Icon name="shopping-cart" color="white" />}
          onPress={() => console.log('Add to cart')}
          buttonStyle={styles.button}
        />

<Image source={productImage} style={{ width: 200, height: 200 , marginTop: 20}} />
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
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    marginBottom: 40
  },
});
