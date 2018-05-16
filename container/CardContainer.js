import React, { Component } from 'react';
import Card from '../components/Card';

class CardContainer extends Component {
  state = {
    numberImages: 0
  }

  nextPhoto(){
    let numberImages = this.state.numberImages;
    let lengthArrayImages = this.props.images.length - 1;
    if(numberImages >= lengthArrayImages){
      this.setState({ numberImages})
    }else{
      numberImages += 1;
      this.setState({numberImages})
    }
  }

  render() { 
    return (  
      <Card nextPhoto={this.nextPhoto} {...this.props} indexImage={this.state.numberImages} />
    );
  }
}
 
export default CardContainer;