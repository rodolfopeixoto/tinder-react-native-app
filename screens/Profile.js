import React, { Component } from 'react';
import styles from '../styles';
import {
 Text,
 View,
 Image

} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component{
  state = {}

  
  componentWillMount() {
    
  }

  render(){
    return(
      <View style={styles.containerPicture}>
        <Image 
          style={styles.profilePicture}
          source={ { uri: this.props.user.photoUrl }}
        />
        <Text>
          { this.props.user.name.split(' ')[0] }
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


export default connect(mapStateToProps)(Profile);