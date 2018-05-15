import { StyleSheet } from 'react-native';
let Dimensions  = require('Dimensions');
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnFACEBOOK: {
    borderRadius: 8,
    backgroundColor: '#4367b2',
    padding: 10,
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtnFacebook:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  color: {
    color: '#df4723'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: 10,
  },
  imgRow:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 15
  },
  textInput:{
    width: deviceWidth,
    padding: 15,
    backgroundColor: '#fff',
    height: 100
  },
  bold:{
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button:{
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#df4723',
    textAlign: 'center',
    color: '#df4723',
    padding: 15,
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttomAdd: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 45
  },
  profile:{
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  }
});

module.exports = styles