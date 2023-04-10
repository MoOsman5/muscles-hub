
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

      {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit})=>(
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'}/>
          <Text style={styles.text1}>Calculate your daily needs of calories and essential nutrients</Text>
          <View style={styles.v1}>

            {/* weight block  */}

            <View style={styles.cont2}>

              <Text style={styles.text2}>Enter your weight by kg</Text>

              <TextInput 
                placeholder="weight"
                value={values.weight}
                onChangeText={handleChange('weight')}
                onBlur={()=> setFieldTouched('weight')}
                style={styles.input} />

              {touched.weight && errors.weight && (<Text style={styles.errorTxt}>{errors.weight}</Text>)}
            </View>

            {/* height block  */}

            <View style={styles.cont2}>

              <Text style={styles.text2}>Enter your height by cm</Text>

              <TextInput 
                placeholder="height"
                value={values.height}
                onChangeText={handleChange('height')}
                onBlur={()=> setFieldTouched('height')}
                style={styles.input} />

                {touched.height && errors.height && (<Text style={styles.errorTxt}>{errors.height}</Text>)}

            </View>

            {/* age block  */}

            <View style={styles.cont2}>
            
              <Text style={styles.text2}>Enter your age </Text>

              <TextInput 
                placeholder="age"
                value={values.age}
                onChangeText={handleChange('age')}
                onBlur={()=> setFieldTouched('age')}
                style={styles.input} />

              {touched.age && errors.age && (<Text style={styles.errorTxt}>{errors.age}</Text>)}
            </View>

          </View>

          <View style={styles.v2}>

            {/* gender selector  */}

            <SelectDropdown
              defaultButtonText={'gender'}
              buttonStyle={styles.gen}
              data={gender}
              dropdownStyle={styles.gen1}
              buttonTextStyle={styles.text3}
              onSelect={(selectedItem, index) => {
                if(selectedItem == 'male'){
                  setX(5)
                }else if(selectedItem == 'female'){
                  setX(-161)
                }
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />

            {/* Activity rate selector */}

            <SelectDropdown
              defaultButtonText={'Activity rate'}
              buttonStyle={styles.rate}
              data={activityRate}
              dropdownStyle={styles.rate1}
              buttonTextStyle={styles.text3}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                if(selectedItem == 'Little or no exercise'){
                  setRate(1.25)
                }else if(selectedItem == 'Light(1 to 3 days a week)'){
                  setRate(1.375)
                }else if(selectedItem == 'Moderate(3 to 4 days a week)'){
                  setRate(1.55)
                }else if(selectedItem == 'Vigorous(6 to 7 days a week)'){
                  setRate(1.725)
                }
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!isValid}
            style={[styles.button ,{backgroundColor: isValid ? '#FF7F50':'#ffdab9'}]}>
            <Text style={styles.text}>Calculate</Text>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.text}>Your daily calorie needs :{cal} Cal</Text>
            <Text style={styles.text}>Your daily protein needs :{pro} g</Text>
            <Text style={styles.text}>Your daily water needs :{w} L</Text>
          </View>




        </View>
        )}
    </Formik>
  );
}


export default Calculator;
