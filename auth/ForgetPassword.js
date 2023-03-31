import React from 'react';
import { Text, View, TextInput, ImageBackground,TouchableOpacity  } from 'react-native';
import styles from '../styles/forgetPasswordStyle';
  

const ForgetPassword = () => {
  return (
        <View>
          <ImageBackground
            source={require('../images/resetPassword.png')}
            resizeMode="stretch"
            style={styles.img}>
            <View style={styles.container}>
              <Text style={styles.text1}>Reset Password</Text>
              <Text style={styles.text2}>Enter your Email to reset.</Text>
              <TextInput placeholder="Email" style={styles.input} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Reset</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
  );
}

export default ForgetPassword;
