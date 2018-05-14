import React, { Component } from 'react';
import styles from '../styles';
import {
 Text,
 View,
 Image,
 TouchableOpacity

} from 'react-native';
import { connect } from 'react-redux';
import { uploadImage } from '../redux/actions';

class Profile extends Component{
  state = {}

  
  componentWillMount() {
    this.props.dispatch(uploadImage(this.props.user.images))    
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
        <View  style={{ flexDirection: 'row' }}>
          { this.props.user.images.map( (uri,key) => {
            return(
              <TouchableOpacity key={{key}}>
                <Image
                  style={styles.profilePicture}
                  source={{uri: uri}} />
              </TouchableOpacity>
            );
          })}
        </View>

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