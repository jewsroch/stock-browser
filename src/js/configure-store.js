import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import wsMiddleware from './middleware/websocket';

const middleware = [wsMiddleware];

// @TODO - REMOVE
const composeEnhancers = composeWithDevTools({
  actionsBlacklist: ['WS_PING', 'WS_MESSAGE_PONG'],
});

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}
