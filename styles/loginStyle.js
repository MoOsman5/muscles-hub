import {StyleSheet,Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    top:70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:220,
    height: 40,
    margin: 16,
    borderWidth: 2,
    padding: 15,
    color:'white',
    borderRadius:15,
    backgroundColor:'#303030',
    border:0
  },
  text1:{
    fontSize:50,
    color:'white',
    margin:15
  },
  text2:{
    fontSize:10,
    color:'#FF7F50'
  },
  text3:{
    fontSize:10,
    color:'white',
    margin:5
  },
  text:{
    fontSize:20,
    color:'white'
  },
  button:{
    // backgroundColor:'#FF7F50',
    height: 40,
    width:220,
    padding: 10,
    margin: 16,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorTxt:{
    fontSize:10,
    color:'#FF0D10'
  }


});

export default styles;
