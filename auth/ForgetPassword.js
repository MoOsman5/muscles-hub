import React from 'react';
import { Text, View, TextInput, ImageBackground,TouchableOpacity,StatusBar  } from 'react-native';
import { passwordReset } from '../config/firebase';
import styles from '../styles/forgetPasswordStyle';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AntDesign,Ionicons } from '@expo/vector-icons'; 

const SignupSchema = Yup.object().shape({

  // email validation
    
  email:
    Yup
      .string()
      .email('Invalid email.')
      .required('Please enter your email.'),
});

const ForgetPassword = ({navigation}) => {
  return (
    <Formik
      initialValues={{
      email:'',
      password:'',
      }}
      validationSchema={SignupSchema}

      // forget password with email in firebase

      onSubmit={
        async (values) => {
          try {
            await passwordReset(values.email)
            console.log('Password reset email sent successfully')
            navigation.navigate('Login')
          } catch (error) {
            actions.setFieldError('general', error.message)
          }
        }
      }
    >
      {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit})=>(

        <View>
          <ImageBackground
            source={require('../images/resetPassword.png')}
            resizeMode="stretch"
            style={styles.img}>
              <Ionicons name="ios-arrow-back" size={24} color="white" style={styles.back} onPress={()=>navigation.navigate('Login')} />
            <View style={styles.container}>
              <Text style={styles.text1}>Reset Password</Text>
              <Text style={styles.text2}>Enter your Email to reset.</Text>

               {/* email input */}

              <TextInput
                    placeholder="Email"
                    value={values.email}
                    autoCapitalize={false}
                    onChangeText={handleChange('email')}
                    onBlur={()=> setFieldTouched('email')}
                    style={styles.input} />

              {/* email validation error text */}

              {touched.email && errors.email && (<Text style={styles.errorTxt}>{errors.email}</Text>)} 
              
              {/* reset bottom */}

              <TouchableOpacity 
                disabled={!isValid}
                style={[styles.button ,{backgroundColor: isValid ? '#FF7F50':'#ffdab9'}]}
                onPress={handleSubmit}>
                <Text style={styles.text}>Reset</Text>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </View>
            )}
    </Formik>
  );
}

export default ForgetPassword;
