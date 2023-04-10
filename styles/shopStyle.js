import {StyleSheet, Dimensions} from 'react-native';



const styles = StyleSheet.create({
containr:{
  flex: 1,
  justifyContent: 'center',
  backgroundColor:'#303030'
},
mainText:{
  fontSize:30,
  color:'white',
  margin:10,
  marginTop:28
},
containr2:{
  width:'85%',
  height:100,
  flexDirection:'row',
  margin:20
},
containr3:{
  width:'50%',
  height:120,
  margin:8,
  alignItems: 'center',
  borderRadius:20,
  border:1,
  borderStyle:'solid',
  borderColor:'#FF7F50',
  backgroundColor:'#FF7F50'
},
img:{
  width:'100%',
  height:80,
  borderRadius:20,
  border:1
},
bText:{
  fontSize:25,
  color:'white'
}
});
export default styles;
