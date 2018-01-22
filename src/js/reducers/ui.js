import { WS_OPEN, SELECT_STOCK_LETTER, SELECT_STOCK } from '../actions/actions';

const initialState = {
  selectedStock: null,
  selectedLetter: 'A',
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

    case SELECT_STOCK: {
      const { stock } = payload;

      if (stock[0] !== state.selectedLetter) {
        return {
          ...state,
          selectedLetter: stock[0],
          selectedStock: stock,
        };
      }

      return {
        ...state,
        selectedStock: payload.stock,
      };
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
