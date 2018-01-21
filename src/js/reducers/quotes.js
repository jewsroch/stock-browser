import { WS_MESSAGE } from '../actions/actions';

const initialState = {};
const quotesReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case WS_MESSAGE: {
      const { namespace, name, data } = payload.data;
      if (namespace === 'get' && name === 'stock.quote') {
        return {
          ...state,
          [data.symbol]: data,
        };
      }
      return state;
    }

    default:
      return state;
  }
};

export default quotesReducer;
