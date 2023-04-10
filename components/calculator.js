
import React,{useState} from 'react';
import { Text, View, TextInput, ImageBackground,TouchableOpacity,StatusBar,StyleSheet  } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SelectDropdown from 'react-native-select-dropdown'
import styles from '../styles/calculatorStyle';

const gender = ['male','female']
const activityRate =['Little or no exercise','Light(1 to 3 days a week)','Moderate(3 to 4 days a week)','Vigorous(6 to 7 days a week)']


const SignupSchema = Yup.object().shape({

  // weight validation

  weight :
    Yup
      .number('Please enter weight as anumber')
      .required('Please enter your weight.'),

  // height validation 

  height :
  Yup
    .number('Please enter height as anumber')
    .required('Please enter your height.'),

  // age validation 

  age :
  Yup
    .number('Please enter age as anumber')
    .required('Please enter your age.'),


    });

const Calculator = () => {
  const [rate, setRate] = useState('   ');
  const [x, setX] = useState('   ');
  const [cal, setCal] = useState('   ');
  const [pro, setPro] = useState('   ');
  const [w, setW] = useState('   ');




  return (
    <Formik 
      initialValues={{
        weight:'',
        height:'',
        age:''
        }}
      validationSchema={SignupSchema}
      onSubmit={
        (values)=>{ 
          let y =((10*values.weight)+(6.25*values.height)-(5*values.age)+x)*rate
          setCal(y)
          setPro((values.weight*1.4))
          setW(Math.round((values.weight/0.4536)/50))
        }
      }
      >
{/* code */}
    </Formik>
  );
}


export default Calculator;
