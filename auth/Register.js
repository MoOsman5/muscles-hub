import React from 'react';
import { Text, View, TextInput, ImageBackground,TouchableOpacity,StatusBar  } from 'react-native';
import styles from '../styles/registerStyle';
import { auth,db } from '../config/firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({

  // name validation

  name:
    Yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please enter your full name.'),

  // email validation

  email:
    Yup
      .string()
      .email('Invalid email.')
      .required('Please enter your email.'),

  // password validation

  password:
    Yup
      .string()
      .min(8,'Password must be at least 8 characters')
      .required('Please enter your password.'),
  
  // comfirmPassword validation

  confirmPassword:
    Yup
      .string()
      .oneOf([Yup.ref('password')],"Your Password don't match.")
      .required('Please re-enter password '),

});


const Register = ({navigation}) => {
  return (
    <Formik 
      initialValues={{
        name:'',
        email:'',
        password:'',
        comfirmPassword:''
        }}
      validationSchema={SignupSchema}

      // create User in firebase

      onSubmit={
        (values)=>{ 
          auth
          .createUserWithEmailAndPassword(values.email,values.password)
          .then(userCredentials =>{
            const user =userCredentials.user;

            // add data to Firestore
            
            db.collection("users").doc(user.uid).set({
              name:values.name,
          })
            navigation.navigate("Login")
          })
          .catch(error => alert(error.message))
        }
      }
      >
      {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit})=>(
        <View>
          <StatusBar barStyle={'light-content'}/>
          <ImageBackground
            source={require('../images/register.png')}
            resizeMode="stretch"
            style={styles.img}>
            <View style={styles.container}>
              <Text style={styles.text1}>Create new Account</Text>

              {/* Login navigation */}

              <TouchableOpacity
                onPress={()=>navigation.navigate("Login")}
                >
              <Text style={styles.text2}>Already Registered?Log in here.</Text>
              </TouchableOpacity>

              {/* Name input  */}

              <TextInput 
                placeholder="Full Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={()=> setFieldTouched('name')}
                style={styles.input} />

              {/* Name validation error text */}

              {touched.name && errors.name && (<Text style={styles.errorTxt}>{errors.name}</Text>)} 

              <TextInput
                placeholder="Email"
                value={values.email}
                autoCapitalize={false}
                onChangeText={handleChange('email')}
                onBlur={()=> setFieldTouched('email')}
                style={styles.input} />

              {/* email validation error text */}

              {touched.email && errors.email && (<Text style={styles.errorTxt}>{errors.email}</Text>)}

              {/* Password input  */}

              <TextInput 
                style={styles.input}
                placeholder="Password"
                autoCapitalize={false}
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={()=> setFieldTouched('password')}
                />

              {/* password validation error text */}

              {touched.password && errors.password && (<Text style={styles.errorTxt}>{errors.password}</Text>)}

              {/* comfirm password input  */}

              <TextInput 
                style={styles.input}
                placeholder="Comfirm Password"
                secureTextEntry
                autoCapitalize={false}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={()=> setFieldTouched('confirmPassword')}
                />

              {/* comfirm password validation error text */}

              {touched.comfirmPassword && errors.confirmPassword && (<Text style={styles.errorTxt}>{errors.confirmPassword}</Text>)}

              {/* sign up button  */}

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={[styles.button ,{backgroundColor: isValid ? '#FF7F50':'#ffdab9'}]}>
                <Text style={styles.text}>Sign up</Text>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}

export default Register;
