import groupBy from 'lodash/groupBy';
import { WS_MESSAGE } from '../actions/actions';
import stocksData from './stocks-initial-state';

const initialState = stocksData || [];
const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_MESSAGE: {
      const { namespace, name, data } = action.payload.data;
      if (namespace === 'get' && name === 'stock.list') {
        return groupBy(data, stock => stock.symbol[0]);
      }
      return state;
    }
    default:
      return state;
  }
};

export default stocksReducer;
