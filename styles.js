import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
  containerPicture:{
    flex: 1,
    alignItems: 'center'
  },
  profilePicture:{
    width: 110,
    height: 110,
    borderRadius: 50,
    margin: 10
  }
});

module.exports = styles