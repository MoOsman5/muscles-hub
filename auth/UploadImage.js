import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Image, TextInput ,ImageBackground} from 'react-native';
import auth from '../test/firebase'
import {  signInWithEmailAndPassword } from "firebase/auth";  
import { storage } from '../test/firebase';
// ...
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import {  useEffect } from "react";

export default function  Uploadimage  ({navigation}) {
  
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name }`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const [email, setEmail] = useState('');
  const [user, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [count,setcount] =useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.bu}>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url , index ) => {
        return  <div key={index}>  <img src={url} key={url.id}/>   </div>
      ;
      })}        

      </View>
      <View style={styles.hh}>
      <Button  title="click me" 
              color="green"
            ></Button>
            
              </View>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
    // justifyContent: 'center',
  },
  bu: {
    flexDirection : 'row',
    width:500,
    margin: 10,
    padding: 20,   
    //backgroundColor:'#000000',
    justifyContent:'space-around',
  
  },
  tinyLogo: {
    width: 800,
    height: 300,
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, hh:{

marginTop : 
350
, width: 300
  }
})

 