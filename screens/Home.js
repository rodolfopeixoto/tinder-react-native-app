import React, { Component } from 'react';
import styles from '../styles';
import {
 Text,
 View,
 Alert
} from 'react-native';
import { connect } from 'react-redux';
import { getCards } from '../redux/actions';
import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from '../components/NoMoreCards';
import { firebase } from '../config/firebase';
import CardContainer from '../container/CardContainer';

class Home extends Component{
  
  
  state = {
    cards: [
      {name: 'fran', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
      {name: 'jackie', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
      {name: 'phil', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
      {name: 'jacks', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
      {name: 'mellow', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
      {name: 'frank', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
      {name: 'timmmay', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
    ]
  };


  handleYup(card){
    firebase.database().ref(`cards/${this.props.user.id}/swipes`).update({ [card.id]: true });
  }

  handleNope(card){
    firebase.database().ref(`cards/${this.props.user.id}/swipes`).update({[card.id]: false});
  }

  handleMaybe(card){
    console.log(`Maybe for ${card.name}`)
  }

  
  componentWillMount() {
    this.props.dispatch(getCards());
  }


  render(){
    return(
      <SwipeCards 
        cards={this.props.cards}
        stack={false}
        renderCard={ (cardData) => <CardContainer {...cardData} />}
        renderNoMoreCards={ () => <NoMoreCards /> }
        showYup={false}
        showNop={false}
        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
        handleMaybe={this.handleMaybe}
        hasMaybeAction={false}
      />
    );
  }
  

}

function mapStateToProps(state){
  return{
    loggedIn: state.loggedIn,
    cards: state.cards,
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);