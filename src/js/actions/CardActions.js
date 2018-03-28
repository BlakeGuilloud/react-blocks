import axios from 'axios';
import { normalize, schema } from 'normalizr';
import { createAction } from 'redux-actions';

import {
  RECEIVE_CARDS,
  CREATE_CARD
} from '../constants/CardActionTypes';

const card = new schema.Entity('cards');

const receiveCards = createAction(RECEIVE_CARDS);
const receiveCreateCard = createAction(CREATE_CARD);

export function fetchCards() {
  return dispatch =>
    axios.get('https://s3.amazonaws.com/react-blocks/CardData.json')
      .then(({ data }) => {
        const normalizedCardData = normalize(data, [card]);

        dispatch(receiveCards(getCardsPayload(normalizedCardData)));
      });
}

export function createCard(card) {
  return dispatch => {
    dispatch(receiveCreateCard(card));
  };
}


function getCardsPayload(normalizedCardData) {
  return {
    cards: {
      ...normalizedCardData.entities.cards,
    },
    cardIds: normalizedCardData.result,
  };
}