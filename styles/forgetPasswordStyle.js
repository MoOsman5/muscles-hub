import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
<<<<<<< HEAD
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
    backgroundColor:'#FF7F50',
    height: 40,
    width:220,
    padding: 10,
    margin: 16,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  }
=======
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
        backgroundColor:'#FF7F50',
        height: 40,
        width:220,
        padding: 10,
        margin: 16,
        borderRadius:15,
        alignItems: 'center',
        justifyContent: 'center'
      }
>>>>>>> e2aa95b7b86289842bb632d4b90f7380409d338d
});

export default styles;
