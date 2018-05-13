import * as firebase from 'firebase';

const configFirebase = {
    apiKey: "AIzaSyDUR6P7Y2v1O8dfu19JgV6fRbRAkygPGSE",
    authDomain: "tinderappreactnative.firebaseapp.com",
    databaseURL: "https://tinderappreactnative.firebaseio.com",
    projectId: "tinderappreactnative",
    storageBucket: "tinderappreactnative.appspot.com",
    messagingSenderId: "125601912219"
};

if (!firebase.apps.length) {
  firebase.initializeApp(configFirebase);
}

const auth = firebase.auth();

export {
  auth,
  firebase
}