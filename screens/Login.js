import React, {Component} from 'react';
import styles from '../styles';
import { 
  TouchableOpacity,
   View,
   Text
} from 'react-native';
import RootNavigator from '../navigation/RootNavigator.js';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import { firebase } from '../config/firebase';

class Login extends Component{
  state = {}

  componentWillMount() {
    // this.props.dispatch(login())
    // this.login();

    firebase.auth().onAuthStateChanged((user) => {
      if(user != null){
        this.props.dispatch(login(user));
      }
    });

  }


  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1812020642439167', {
      permissions: ['public_profile'],
    });
    if(type === 'success'){
      //Build Firebase credential with the facebook access token
      const credential = await firebase.auth.FacebookAuthProvider.credential(token);

      //Sign in with credential from the Facebook user.
      await firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        Alert.alert('Try Again');
      });
    }
  }

  render(){

    if(this.props.loggedIn){
      return(
        <RootNavigator/>
      );
    }else{
      return(
        <View style={styles.container}>
          <TouchableOpacity 
            style={ styles.btnFACEBOOK }
            onPress={this.login.bind(this)}>
            <Text
             style={ styles.textBtnFacebook }
            >
              LOGIN WITH FACEBOOK
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}


function mapStateToProps(state){
  return{
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Login);