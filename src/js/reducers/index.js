import { combineReducers } from 'redux';

const noopReducer = (state = {}) => ({
  ...state,
  foo: 'bar',
});

export default combineReducers({
  chart: noopReducer,
  news: noopReducer,
  peers: noopReducer,
  quotes: noopReducer,
  stocks: noopReducer,
  ui: noopReducer,
});
