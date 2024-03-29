import React  from 'react';
import { Text, View, TextInput, ImageBackground,TouchableOpacity,StatusBar} from 'react-native';
import styles from '../styles/loginStyle';
import { auth} from '../config/firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SocialIcon } from 'react-native-elements'
import {signInWithGoogle} from "./signInWithGoogle"
import {signInWithFacebook} from "./signInWithFacebook"

// validation Schema

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Please enter your email.'),
});

const Login = ({navigation}) => {
  return (

    <Formik
      initialValues={{
      email:'',
      password:'',
      }}
      validationSchema={SignupSchema}

      // signin with user in firebase

      onSubmit={
        (values)=>{ 
          auth
          .signInWithEmailAndPassword(values.email,values.password)
          .then(userCredentials =>{
            const user =userCredentials.user;
            console.log('logged in with ',user.email);
            navigation.navigate("Tabs")

          })
          .catch(error => alert(error.message))
        }
      }
    >

      {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit})=>(
        
        <View>
          <splashScreen />
          <StatusBar barStyle={'light-content'}/>
          <ImageBackground
                source={require('../images/login.png')}
                resizeMode="stretch"
                style={styles.img}>
                <View style={styles.container}>
                  <Text style={styles.text1}>Login</Text>
                  <Text style={styles.text2}>Sing in to continue.</Text>

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

                  {/* password input */}

                  <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize={false}
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={()=> setFieldTouched('password')}
                  />

                  {/* login button */}

                  <TouchableOpacity
                    disabled={!isValid}
                    style={[styles.button ,{backgroundColor: isValid ? '#FF7F50':'#ffdab9'}]}
                    onPress={handleSubmit}
                    >
                    <Text style={styles.text}>Login</Text>
                  </TouchableOpacity>

                  <Text style={styles.text2}>Or Signin with</Text>

                  <View style={styles.v1}>
                      {/* login with google button    */}

                    <SocialIcon
                      type='google'
                      onPress={signInWithFacebook}
                    />

                    {/* login with Facebook button    */}

                    <SocialIcon
                      type='facebook'
                      onPress={signInWithFacebook}
                    />
                  </View>

                  

                  {/* ForgetPassword navigation */}

                  <TouchableOpacity
                    onPress={()=>navigation.navigate("ForgetPassword")}
                  >
                    <Text style={styles.text3}>Forgot Password?</Text>
                  </TouchableOpacity>

                  {/* SignUp navigation */}

                  <TouchableOpacity
                    onPress={()=>navigation.navigate("Register")}
                  >
                    <Text style={styles.text3}>SignUp!</Text>
                  </TouchableOpacity>



                </View>
              </ImageBackground>  
        </View>
      )}
    </Formik>

  );
}

export default Login;
