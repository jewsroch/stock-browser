import {
  WS_CONNECT,
  WS_DISCONNECT,
  WS_SEND,
  WS_CLOSE,
  WS_PING,
  connect,
  close,
} from '../actions/actions';
import { handleMessages, handleOpen } from './handlers';

let ws;

const isWSOpen = socket => socket && socket.readyState === WebSocket.OPEN;

// Simple init only handles URL config. Could add support for other WS args here.
const init = ({ dispatch }, { url }) => {
  ws = new WebSocket(url);
  ws.onopen = handleOpen(dispatch);
  ws.onmessage = handleMessages(dispatch);
  ws.onclose = () => event => dispatch(close(event));
};

const wsMiddleware = store => next => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      if (ws) ws.close();
      init(store, action.payload);
      next(action);
      break;

    case WS_PING:
    case WS_SEND:
      if (isWSOpen(ws)) {
        ws.send(JSON.stringify(action.payload));
      }
      next(action);
      break;

    case WS_DISCONNECT:
      clearInterval(window.heartbeatInterval);
      if (ws) ws.close();
      next(action);
      break;

    case WS_CLOSE:
      clearInterval(window.heartbeatInterval);
      if (!isWSOpen(ws)) {
        store.dispatch(connect());
      }
      next(action);
      break;

    default:
      next(action);
  }
};

export default wsMiddleware;
