import {
  WS_CONNECT,
  WS_DISCONNECT,
  WS_SEND,
  WS_CLOSE,
  WS_PING,
  SELECT_STOCK,
  connect,
  close,
  send,
  sendStockListRequest,
  getQuote,
  getPeers,
  sendStockQuoteRequest,
  sendStockPeersRequest,
  sendStockNewsRequest,
  sendStockChartRequest,
} from '../actions/actions';
import { handleMessages, handleOpen } from './handlers';
import { getStockQuote } from './messages';

let ws;

const isWSOpen = socket => socket && socket.readyState === WebSocket.OPEN;

// Simple init only handles URL config. Could add support for other WS args here.
// @TODO - handle args?
const init = ({ dispatch }, { url }) => {
  ws = new WebSocket(url);
  ws.onopen = handleOpen(dispatch);
  ws.onmessage = handleMessages(dispatch);
  ws.onclose = () => event => dispatch(close(event));
};

const wsMiddleware = store => next => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      // close?
      init(store, action.payload);
      next(action);
      break;

    case WS_DISCONNECT:
      // @TODO Do Disconnect
      clearInterval(window.heartbeatInterval);
      if (ws) ws.close();
      next(action);
      break;

    case SELECT_STOCK:
      store.dispatch(sendStockQuoteRequest(action.payload.stock));
      store.dispatch(sendStockPeersRequest(action.payload.stock));
      store.dispatch(sendStockNewsRequest(action.payload.stock));
      store.dispatch(sendStockChartRequest(action.payload.stock));
      next(action);
      break;

    case WS_PING:
    case WS_SEND:
      if (isWSOpen(ws)) {
        ws.send(JSON.stringify(action.payload));
      }
      next(action);
      break;

    case WS_CLOSE:
      // @TODO - find better way to reconnect?
      if (!isWSOpen(ws)) {
        store.dispatch(connect());
      }
      clearInterval(window.heartbeatInterval);
      next(action);
      break;

    default:
      next(action);
  }
};

export default wsMiddleware;
