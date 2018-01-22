import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import wsMiddleware from './middleware/websocket';

const middleware = [thunk, wsMiddleware];

// Hide ping/pong messages from redux devtools to reduce noise.
const composeEnhancers = composeWithDevTools({
  actionsBlacklist: ['WS_PING', 'WS_MESSAGE_PONG'],
});

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}
