import { handleActions } from 'redux-actions';
import { RECEIVE_CARDS, CREATE_CARD } from '../constants/CardActionTypes';

const cardReducer = handleActions({
  [RECEIVE_CARDS]: receiveCardsData,
  [CREATE_CARD]: receiveCardData,
}, {
  cardIds: [],
  cards: {},
  loading: true,
});

function receiveCardsData(state, action) {
  return {
    ...state,
    cards: {
      ...state.cards,
      ...action.payload.cards,
    },
    cardIds: [...new Set([...state.cardIds, ...action.payload.cardIds])],
    loading: false,
  };
}

function receiveCardData(state, action) {
  return {
    ...state,
    cards: {
      ...state.cards,
      [action.payload.id]: action.payload,
    },
    cardIds: [...new Set([...state.cardIds, action.payload.id])],
  };
}


export default cardReducer;