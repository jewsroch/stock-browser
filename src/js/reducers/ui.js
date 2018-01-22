import {
  WS_OPEN,
  SELECT_STOCK_LETTER,
  SELECT_STOCK,
  WS_GET_STOCK_PEERS,
  WS_GET_STOCK_NEWS,
  WS_GET_STOCK_CHART,
  SUBSCRIBE_NEWS,
  UNSUBSCRIBE_NEWS,
  SUBSCRIBE_QUOTE,
  UNSUBSCRIBE_QUOTE,
} from '../actions/actions';

const initialState = {
  selectedStock: null,
  selectedLetter: 'A',
  subscribedQuote: false,
  subscribedNews: false,
  websocketOpen: false,
  loadingPeers: false,
  loadingQuote: false,
  loadingChart: false,
  loadingNews: false,
  loadingStocks: false,
};

const uiReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case WS_OPEN:
      return {
        ...state,
        websocketOpen: true,
      };

    case SUBSCRIBE_NEWS:
      return { ...state, subscribedNews: true };

    case UNSUBSCRIBE_NEWS:
      return { ...state, subscribedNews: false };

    case SUBSCRIBE_QUOTE:
      return { ...state, subscribedQuote: true };

    case UNSUBSCRIBE_QUOTE:
      return { ...state, subscribedQuote: false };

    case WS_GET_STOCK_PEERS:
      return { ...state, loadingPeers: false };

    case WS_GET_STOCK_NEWS:
      return { ...state, loadingNews: false };

    case WS_GET_STOCK_CHART:
      return { ...state, loadingChart: false };

    case SELECT_STOCK: {
      const { stock } = payload;
      const newState = {
        ...state,
        loadingPeers: true,
        loadingNews: true,
        loadingChart: true,
        selectedStock: payload.stock,
      };

      if (stock[0] !== state.selectedLetter) {
        newState.selectedLetter = stock[0];
      }

      return newState;
    }

    case SELECT_STOCK_LETTER:
      return {
        ...state,
        selectedLetter: payload.letter,
      };

    default:
      return state;
  }
};

export default uiReducer;
