import React from 'react';
import { Text, View, TextInput, ImageBackground,TouchableOpacity  } from 'react-native';
import styles from '../styles/registerStyle';

const Register = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../images/register.png')}
        resizeMode="stretch"
        style={styles.img}>
        <View style={styles.container}>
          <Text style={styles.text1}>Creat new Account</Text>
          <TouchableOpacity
            onPress={()=>navigation.navigate("Login")}
          >
          <Text style={styles.text2}>Already Registered?Log in here.</Text>
          </TouchableOpacity>
          <TextInput placeholder="Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TextInput placeholder="Comfirm Password" style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Register;
