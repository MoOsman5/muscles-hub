import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { db,auth } from '../config/firebase';






export default function Article() {
  const [n, setN] = useState('');

  const handleLogOut =()=>{
    auth
    .signOut()
    .then(() => console.log('User signed out!'))

      navigation.navigate("Login")
  }

  db.collection('users').doc(auth.currentUser?.uid).get().then(doc =>{
    setN(doc.data())
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#303030' }}>
      <TouchableOpacity 
          onPress={handleLogOut}
          style={{ marginLeft:250,backgroundColor:'#FF7F50'}}
          >
          <Text style={{color:'#fff'}}>Log out</Text>
      </TouchableOpacity>
      <Text style={{color:'#fff',fontStyle:'bold',fontSize:25}}>Hi, {n.name}</Text>
    </View>
  );
}