import {
  SELECT_STOCK,
} from '../actions/actions';

const simpleReducer = (dataActionType, initialState = []) => (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SELECT_STOCK: {
      return initialState;
    }

    case dataActionType: {
      return payload.data.data;
    }

    default:
      return state;
  }
};

export default simpleReducer;
