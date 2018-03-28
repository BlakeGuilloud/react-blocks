import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCards, createCard } from '../actions/CardActions';
import Header from './Header';
import Card from './Card';
import { ContentWrapper, Button, ButtonWrapper } from '../styled/Scaffolding';
import { getFakePayload } from '../helpers';

class App extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  createCard = () => {
    this.props.createCard(getFakePayload());
  }

  render() {
    return (
      <Fragment>
        <Header />
        <ButtonWrapper>
          <Button onClick={this.createCard}>Create Card</Button>
        </ButtonWrapper>
        <ContentWrapper>
          {this.props.cardIds.map(id => <Card key={id} {...this.props.cards[id]} />)}
        </ContentWrapper>
      </Fragment>
    );
  }
}

App.propTypes = {
  cardIds: PropTypes.array.isRequired,
  cards: PropTypes.object.isRequired,
  createCard: PropTypes.func.isRequired,
  fetchCards: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ cards: { cards, cardIds, loading } }) => {
  return {
    cards,
    cardIds,
    loading,
  };
};

const actions = {
  fetchCards,
  createCard,
};

export default connect(mapStateToProps, actions)(App);