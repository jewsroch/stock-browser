import {
  WS_GET_STOCK_NEWS,
  WS_UPDATE_STOCK_NEWS,
  SELECT_STOCK,
} from '../actions/actions';

const initialState = [];
const newsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SELECT_STOCK: {
      return initialState;
    }

    case WS_UPDATE_STOCK_NEWS:
    case WS_GET_STOCK_NEWS:
      return payload.data.data;

    default:
      return state;
  }
};

export default newsReducer;
