
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { auth, db } from '../config/firebase';
import Ionic from 'react-native-vector-icons/Ionicons'
import calculator from './calculator';
import Shop from './Shop';
import Profile from './Profile';
import Home from './Home';
import { AntDesign ,FontAwesome5,Entypo,MaterialIcons} from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator(); 






export default function Tabs({navigation}) {
  const [s, setS] = useState('');
  
  const handleLogOut =()=>{
    auth
    .signOut()
    .then(() => console.log('User signed out!'))

      navigation.navigate("Login")
  }
  

  return (
    
  <Tab.Navigator 
  screenOptions={({route})=>({
    headerShown: false,
    tabBarStyle:{
      backgroundColor:'#FF7F50'
    },
    tabBarIcon:({focused,size,color})=>{
      let iconName;
      if(route.name === 'Home'){
        iconName = focused ? 'ios-home' : 'ios-home-outline';
        size =focused? size+5 :size
      }else if(route.name === 'calculator'){
        iconName = focused ? 'calculator' : 'calculator-outline';
        size =focused? size+5 :size

      }else if(route.name === 'Shop'){
        iconName = focused ? 'ios-cart-sharp' : 'ios-cart-outline';
        size =focused? size+5 :size

      }else if(route.name === 'Profile'){
        iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
        size =focused? size+5 :size

      }
      return <Ionic name={iconName} size={size} color={color} />
    } 
  })}
  tabBarOptions={{
    showLabel:false,
    activeTintColor:'black',
    inactiveTintColor:'black',

  }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="calculator" component={calculator}/>
    <Tab.Screen name="Shop" component={Shop}   />
    <Tab.Screen name="Profile" component={Profile}/>
  </Tab.Navigator>


    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logout:{
      marginLeft:250
    },
    text :{
      textAlign:'center',
      marginTop: 50
    },
    t1:{
      backgroundColor:'#101010'
    }
  });