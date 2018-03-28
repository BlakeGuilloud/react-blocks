import React, { Component } from 'react';
import cx from 'classnames';

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
    const cardClasses = cx('card', {
      'active': this.state.active,
    });

    return (
      <div className="card-wrapper">
        <div onClick={() => this.handleToggle('active')} className={cardClasses}>
          <CardFront
            title={this.props.title}
            disclaimer={this.props.disclaimer}
          />
          <CardBack
            backTitle={this.props.backTitle}
            image={this.props.image}
            description={this.props.description}
          />
        </div>
      </div>
    );
  }
}

export default Card;