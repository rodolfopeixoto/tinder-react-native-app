import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground, Text, View } from 'react-native';
import styles from '../styles';

const Card = (props) => {
    return (
      <TouchableOpacity onPress={ () => props.nextPhoto } >
        <ImageBackground source={{uri: props.images[props.indexImage] }}  style={styles.card}  >
          <View style={styles.cardDescription}>
            <View style={styles.cardInfo}>
              <Text style={styles.bold}>{props.name}</Text>
              <Text>{props.aboutMe}</Text>
            </View>
          </View>
        </ImageBackground>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    )
}

export default Card;