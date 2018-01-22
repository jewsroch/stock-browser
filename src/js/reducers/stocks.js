import groupBy from 'lodash/groupBy';
import { WS_GET_STOCK_LIST } from '../actions/actions';
import stocksData from './stocks-initial-state';

const initialState = stocksData || [];
const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_GET_STOCK_LIST: {
      const { data } = action.payload.data;
      return groupBy(data, stock => stock.symbol[0]);
    }
    default:
      return state;
  }
};

export default stocksReducer;
