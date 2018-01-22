import {
  WS_GET_STOCK_QUOTE,
} from '../actions/actions';

const initialState = {};
const quotesReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case WS_GET_STOCK_QUOTE: {
      const { data } = payload.data;
      return {
        ...state,
        [data.symbol]: data,
      };
    }

    default:
      return state;
  }
};

export default quotesReducer;
