import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Subject } from 'rxjs';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import wsMiddleware from './middleware/websocket';

// Redux like store using RXJS
// -------------------
export const rxjsActions$ = new Subject();
export const rxjsStore$ = rxjsActions$
  .startWith(rootReducer({}, { type: 'FOO', payload: {} })) // Faking initialState using reducer defaults
  .scan(rootReducer);

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// Dispatching actions to rxjsStore using middleware...
const rxjsMiddleware = store => next => (action) => {
  // console.log('ACTION TRIGGERED', action);
  rxjsActions$.next(action);
  next(action);
};

export const rxjsStoreFinal$ = rxjsStore$;
// .do(data => console.log('NEXTSTATE:', data.ui.selectedStock));
// -------------------

const middleware = [thunk, wsMiddleware, rxjsMiddleware];

// Hide ping/pong messages from redux devtools to reduce noise.
const composeEnhancers = composeWithDevTools({
  actionsBlacklist: ['WS_PING', 'WS_MESSAGE_PONG'],
});

function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}

export default configureStore();
