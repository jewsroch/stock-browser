import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import uiReducer from './ui';
import quotesReducer from './quotes';

const noopReducer = (state = {}) => ({
  ...state,
  foo: 'bar',
});

export const selectedQuote = state => state.quotes[state.ui.selectedStock];

export default combineReducers({
  chart: noopReducer,
  news: noopReducer,
  peers: noopReducer,
  quotes: quotesReducer,
  stocks: stocksReducer,
  ui: uiReducer,
});
