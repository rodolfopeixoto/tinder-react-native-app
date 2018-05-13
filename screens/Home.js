import React, { Component } from 'react';
import styles from '../styles';
import {
 Text,
 View,
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions'; 


class Home extends Component{
  state = {}

  
  componentWillMount() {
    this.props.dispatch(login())
  }

  render(){
    return(
      <View>
        <Text>
          { this.props.user }
        </Text>
      </View>
    );
  }
  

}

function mapStateToProps(state){
  return{
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);