import React, { Component } from 'react';
import styles from '../styles';
import {
 Text,
 View,
 Alert
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions'; 


class Home extends Component{
  state = {}

  
  componentWillMount() {
  }


  render(){
    return(
      <View>
        <Text>
        HOME
        </Text>
      </View>
    );
  }
  

}

function mapStateToProps(state){
  return{
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Home);