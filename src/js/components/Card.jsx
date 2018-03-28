import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  CardWrapper,
  CardContainer
} from '../styled/CardStyles';
import CardBack from './CardBack';
import CardFront from './CardFront';

class Card extends Component {
  state = {
    active: false,
  }

  handleToggle = (name) => {
    this.setState({
      [name]: !this.state[name],
    });
  }

  render() {
    return (
      <CardWrapper>
        <CardContainer active={this.state.active} onClick={() => this.handleToggle('active')}>
          <CardFront
            disclaimer={this.props.disclaimer}
            title={this.props.title}
          />
          <CardBack
            backTitle={this.props.backTitle}
            image={this.props.image}
            description={this.props.description}
          />
        </CardContainer>
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  backTitle: PropTypes.string,
  description: PropTypes.string,
  disclaimer: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default Card;