import { firebase } from "../config/firebase";
import aws from '../config/aws';
import { ImagePicker } from 'expo';
import { RNS3 } from 'react-native-aws3';
import { Alert } from 'react-native';

export function login(user) {
  return function(dispatch){

    let params = {
      id: user.uid,
      photoUrl: user.photoURL,
      name: user.displayName,
      aboutMe:  ' ',
      chats: ' ',
      geocode: ' ',
      images: [user.photoURL],
      notification: false,
      show: false,
      report: false,
      swipes: {
        [user.uid]: false
      },
      token: ' ',

    }

    firebase.database().ref('cards/').child(user.uid).once('value', function(snapshot){
      if(snapshot.val() !== null){
        dispatch({ type: 'LOGIN', user: snapshot.val(), loggedIn: true });
      }else{
        firebase.database().ref('cards/' + user.uid).update(params);
        dispatch({ type: 'LOGIN', user: params, loggedIn: true});
      }
    })
    
  }
}

export function logout(){
  return function(dispatch) {
    firebase.auth().signOut();
    dispatch({ type: 'LOGOUT', loggedIn: false });
  }
}


export function uploadImages(images){
  return function (dispatch) {
    ImagePicker.launchImageLibraryAsync({ allowsEditing: false })
      .then(function(result){
        let arrayImages = images
        
        if(result.uri != undefined){
          const file = {
            uri: result.uri,
            name: result.uri,
            type: 'image/png'
          }

          const options = {
            keyPrefix: 'uploads/',
            bucket: 'tinder-react-native',
            region: 'us-east-1',
            accessKey: aws.accessKey,
            secretKey: aws.secretKey,
            successActionStatus: 201
          }


          RNS3.put(file,options)
            .then(function(response){
              if(response.status === 201){
                arrayImages.push(response.body.postResponse.location)
                firebase.database().ref('cards/' + firebase.auth().currentUser.uid + '/images').set(arrayImages);
                dispatch({ type: 'UPLOAD_IMAGES', payload: arrayImages });
              }
            })

        }

      })
  }
}

export function deleteImage(images, key){
	return function(dispatch){
    Alert.alert(
      'Are you sure you want to Delete',
      '',
      [
        {text: 'Ok', onPress: () => {
          var array = images
          array.splice(key, 1)
    			dispatch({ type: 'UPLOAD_IMAGES', payload: array });
          firebase.database().ref('cards/' + firebase.auth().currentUser.uid + '/images').set(array);
        }},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
      ],
      { cancelable: true }
    )
	}
}

export function updateAbout(value){
  return function(dispatch){
    dispatch({ type: 'UPDATE_ABOUT', payload: value});
    setTimeout(function(){
      firebase.database().ref(`cards/${firebase.auth().currentUser.uid}`).update({ aboutMe: value });
    }, 3000);
  }
}


export function getCards(){
  return function(dispatch) {
    firebase.database().ref('cards').once('value', (snapshot) => {
      let items = [];
      snapshot.forEach((child) =>{
        let item = child.val();
        item.id = child.key;
        items.push(item);
      });
      dispatch({ type: 'GET_CARDS', payload: items })
    })
  }
}