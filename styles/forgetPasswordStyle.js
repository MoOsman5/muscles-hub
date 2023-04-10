import {StyleSheet, Dimensions} from 'react-native';

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
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:'100%',
    height: 40,
    margin: 10,
    borderWidth: 2,
    padding: 15,
    color:'white',
    borderRadius:15,
    backgroundColor:'#505050',
    border:0
  },
  text1:{
    fontSize:30,
    color:'white',
    margin:15
  },
  text2:{
    fontSize:10,
    color:'#FF7F50'
  },
  text:{
    fontSize:20,
    color:'white'
  },
  button:{
    height: 40,
    width:'100%',
    padding: 10,
    margin: 10,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back:{
    marginRight:'90%',
    marginTop:10
  }
    
});

export default styles;
