import React from 'react';
import {View, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({})

export default ForgetPassword;
