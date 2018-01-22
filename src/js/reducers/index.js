import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import uiReducer from './ui';
import quotesReducer from './quotes';
import newsReducer from './news';
import simpleReducer from './simple';
import {
  WS_GET_STOCK_CHART,
  WS_GET_STOCK_PEERS,
} from '../actions/actions';

export const selectedQuote = state =>
  state.quotes[state.ui.selectedStock];
export const selectedStockGroup = state =>
  state.stocks[state.ui.selectedLetter];

export default combineReducers({
  chart: simpleReducer(WS_GET_STOCK_CHART),
  news: newsReducer,
  peers: simpleReducer(WS_GET_STOCK_PEERS),
  quotes: quotesReducer,
  stocks: stocksReducer,
  ui: uiReducer,
});
