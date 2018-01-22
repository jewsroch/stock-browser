import {
  WS_CONNECT,
  WS_DISCONNECT,
  WS_SEND,
  WS_CLOSE,
  WS_PING,
  SELECT_STOCK,
  SUBSCRIBE_NEWS,
  UNSUBSCRIBE_NEWS,
  SUBSCRIBE_QUOTE,
  UNSUBSCRIBE_QUOTE,
  connect,
  close,
  send,
  sendStockQuoteRequest,
  sendStockPeersRequest,
  sendStockNewsRequest,
  sendStockChartRequest,
  sendUnsubscribeStockNewsRequest,
  unsubscribeNews,
  sendSubscribeStockQuoteRequest,
  sendUnsubscribeStockQuoteRequest,
  unsubscribeQuote,
} from '../actions/actions';
import { handleMessages, handleOpen } from './handlers';
import { subscribeStockNews } from './messages';

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
      if (ws) ws.close();
      init(store, action.payload);
      next(action);
      break;

    case WS_DISCONNECT:
      clearInterval(window.heartbeatInterval);
      if (ws) ws.close();
      next(action);
      break;


    // Move these non ws related handlers out of WS Middleware...
    case SUBSCRIBE_NEWS: {
      const stock = store.getState().ui.selectedStock;
      store.dispatch(send(subscribeStockNews(stock)));
      next(action);
      break;
    }

    case UNSUBSCRIBE_NEWS:
      store.dispatch(sendUnsubscribeStockNewsRequest());
      next(action);
      break;

    case SUBSCRIBE_QUOTE:
      store.dispatch(sendSubscribeStockQuoteRequest(action.payload.stock));
      next(action);
      break;

    case UNSUBSCRIBE_QUOTE:
      store.dispatch(sendUnsubscribeStockQuoteRequest());
      next(action);
      break;

    case SELECT_STOCK: {
      const { subscribedQuote, subscribedNews } = store.getState().ui;
      subscribedNews && store.dispatch(unsubscribeNews());
      subscribedQuote && store.dispatch(unsubscribeQuote());
      store.dispatch(sendStockQuoteRequest(action.payload.stock));
      store.dispatch(sendStockPeersRequest(action.payload.stock));
      store.dispatch(sendStockNewsRequest(action.payload.stock));
      store.dispatch(sendStockChartRequest(action.payload.stock));
      next(action);
      break;
    }

    case WS_PING:
    case WS_SEND:
      if (isWSOpen(ws)) {
        ws.send(JSON.stringify(action.payload));
      }
      next(action);
      break;

    case WS_CLOSE:
      // @TODO - find better way to reconnect?
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
