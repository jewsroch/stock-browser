import {
  getStockQuote,
  getStockPeers,
  getStockNews,
  getStockChart,
  getStockList,
  unsubscribeStockNews,
  unsubscribeStockQuote,
  subscribeStockQuote,
} from '../middleware/messages';

const createMessageAction = type => event => ({
  type,
  payload: {
    data: JSON.parse(event.data),
    event,
  },
});

// Websocket Messages
export const WS_MESSAGE = 'WS_MESSAGE';
const message = createMessageAction(WS_MESSAGE);

export const WS_GET_STOCK_LIST = 'WS_GET_STOCK_LIST';
const getList = createMessageAction(WS_GET_STOCK_LIST);
export const WS_GET_STOCK_QUOTE = 'WS_GET_STOCK_QUOTE';
const getQuote = createMessageAction(WS_GET_STOCK_QUOTE);
export const WS_GET_STOCK_PEERS = 'WS_GET_STOCK_PEERS';
const getPeers = createMessageAction(WS_GET_STOCK_PEERS);
export const WS_GET_STOCK_NEWS = 'WS_GET_STOCK_NEWS';
const getNews = createMessageAction(WS_GET_STOCK_NEWS);
export const WS_GET_STOCK_CHART = 'WS_GET_STOCK_CHART';
const getChart = createMessageAction(WS_GET_STOCK_CHART);

export const WS_UPDATE_STOCK_QUOTE = 'WS_UPDATE_STOCK_QUOTE';
const updateQuote = createMessageAction(WS_UPDATE_STOCK_QUOTE);
export const WS_UPDATE_STOCK_NEWS = 'WS_UPDATE_STOCK_NEWS';
const updateNews = createMessageAction(WS_UPDATE_STOCK_NEWS);

// WebSocket Control Actions
export const WS_OPEN = 'WS_OPEN';
const open = event => ({
  type: WS_OPEN,
  payload: {
    event,
  },
});

export const WS_CLOSE = 'WS_CLOSE';
const close = event => ({
  type: WS_CLOSE,
  payload: {
    event,
  },
});

export const WS_CONNECT = 'WS_CONNECT';
const connect = url => ({
  type: WS_CONNECT,
  payload: {
    url,
  },
});

export const WS_DISCONNECT = 'WS_DISCONNECT';

export const WS_PING = 'WS_PING';
const ping = () => ({
  type: WS_PING,
  payload: {
    name: 'ping',
  },
});

export const WS_MESSAGE_PONG = 'WS_MESSAGE_PONG';
const pong = () => ({
  type: WS_MESSAGE_PONG,
});

export const WS_SEND = 'WS_SEND';
const send = messagePayload => ({
  type: WS_SEND,
  payload: messagePayload,
});

// Websocket Requests
const sendStockListRequest = () => send(getStockList());
const sendStockQuoteRequest = stock => send(getStockQuote(stock));
const sendStockPeersRequest = stock => send(getStockPeers(stock));
const sendStockNewsRequest = stock => send(getStockNews(stock));
const sendStockChartRequest = stock => send(getStockChart(stock));
const sendUnsubscribeStockNewsRequest = () => send(unsubscribeStockNews());
const sendUnsubscribeStockQuoteRequest = () => send(unsubscribeStockQuote());
const sendSubscribeStockQuoteRequest = stock => send(subscribeStockQuote(stock));

// Subscribe Actions
export const SUBSCRIBE_NEWS = 'SUBSCRIBE_NEWS';
const subscribeNews = () => ({ type: SUBSCRIBE_NEWS });

export const UNSUBSCRIBE_NEWS = 'UNSUBSCRIBE_NEWS';
const unsubscribeNews = () => ({ type: UNSUBSCRIBE_NEWS });

export const SUBSCRIBE_QUOTE = 'SUBSCRIBE_QUOTE';
const subscribeQuote = stock => ({
  type: SUBSCRIBE_QUOTE,
  payload: { stock },
});

export const UNSUBSCRIBE_QUOTE = 'UNSUBSCRIBE_QUOTE';
const unsubscribeQuote = () => ({ type: UNSUBSCRIBE_QUOTE });

// UX Actions
export const SELECT_STOCK_LETTER = 'SELECT_STOCK_LETTER';
const selectStockLetter = letter => ({
  type: SELECT_STOCK_LETTER,
  payload: { letter },
});

export const SELECT_STOCK = 'SELECT_STOCK';
const selectStock = stock => ({
  type: SELECT_STOCK,
  payload: { stock },
});

export {
  open,
  message,
  close,
  connect,
  send,
  ping,
  pong,
  selectStockLetter,
  sendStockListRequest,
  sendStockQuoteRequest,
  sendStockNewsRequest,
  sendStockPeersRequest,
  sendStockChartRequest,
  sendUnsubscribeStockNewsRequest,
  sendUnsubscribeStockQuoteRequest,
  sendSubscribeStockQuoteRequest,
  selectStock,
  getList,
  getQuote,
  getPeers,
  getNews,
  getChart,
  updateQuote,
  updateNews,
  subscribeNews,
  unsubscribeNews,
  subscribeQuote,
  unsubscribeQuote,
};
