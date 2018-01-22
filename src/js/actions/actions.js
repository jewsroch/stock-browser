import {
  getStockQuote,
  getStockPeers,
  getStockNews,
  getStockChart,
  getStockList,
  unsubscribeStockNews,
  unsubscribeStockQuote,
  subscribeStockQuote,
  subscribeStockNews,
} from '../middleware/messages';

const createMessageAction = type => event => ({
  type,
  payload: {
    data: JSON.parse(event.data),
    event,
  },
});

// @TODO - Break into separate files

// Websocket Messages
export const WS_MESSAGE = 'WS_MESSAGE';
const wsMessage = createMessageAction(WS_MESSAGE);

export const WS_GET_STOCK_LIST = 'WS_GET_STOCK_LIST';
const wsMessageGetList = createMessageAction(WS_GET_STOCK_LIST);
export const WS_GET_STOCK_QUOTE = 'WS_GET_STOCK_QUOTE';
const wsMessageGetQuote = createMessageAction(WS_GET_STOCK_QUOTE);
export const WS_GET_STOCK_PEERS = 'WS_GET_STOCK_PEERS';
const wsMessageGetPeers = createMessageAction(WS_GET_STOCK_PEERS);
export const WS_GET_STOCK_NEWS = 'WS_GET_STOCK_NEWS';
const wsMessageGetNews = createMessageAction(WS_GET_STOCK_NEWS);
export const WS_GET_STOCK_CHART = 'WS_GET_STOCK_CHART';
const wsMessageGetChart = createMessageAction(WS_GET_STOCK_CHART);

export const WS_UPDATE_STOCK_QUOTE = 'WS_UPDATE_STOCK_QUOTE';
const wsMessageUpdateQuote = createMessageAction(WS_UPDATE_STOCK_QUOTE);
export const WS_UPDATE_STOCK_NEWS = 'WS_UPDATE_STOCK_NEWS';
const wsMessageUpdateNews = createMessageAction(WS_UPDATE_STOCK_NEWS);

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

// Subscribe Actions
export const SUBSCRIBE_NEWS = 'SUBSCRIBE_NEWS';
const doSubscribeNews = () => ({ type: SUBSCRIBE_NEWS });
const sendSubscribeStockNewsRequest = stock => send(subscribeStockNews(stock));
const subscribeNews = () => (dispatch, getState) => {
  const stock = getState().ui.selectedStock;
  dispatch(doSubscribeNews(stock));
  dispatch(sendSubscribeStockNewsRequest(stock));
};

export const UNSUBSCRIBE_NEWS = 'UNSUBSCRIBE_NEWS';
const doUnsubscribeNews = () => ({ type: UNSUBSCRIBE_NEWS });
const sendUnsubscribeStockNewsRequest = () => send(unsubscribeStockNews());
const unsubscribeNews = () => (dispatch) => {
  dispatch(doUnsubscribeNews());
  dispatch(sendUnsubscribeStockNewsRequest());
};


export const SUBSCRIBE_QUOTE = 'SUBSCRIBE_QUOTE';
const doSubscribeQuote = stock => ({
  type: SUBSCRIBE_QUOTE,
  payload: { stock },
});
const sendSubscribeStockQuoteRequest = stock => send(subscribeStockQuote(stock));
const subscribeQuote = stock => (dispatch) => {
  dispatch(doSubscribeQuote(stock));
  dispatch(sendSubscribeStockQuoteRequest(stock));
};

export const UNSUBSCRIBE_QUOTE = 'UNSUBSCRIBE_QUOTE';
const doUnsubscribeQuote = () => ({ type: UNSUBSCRIBE_QUOTE });
const sendUnsubscribeStockQuoteRequest = () => send(unsubscribeStockQuote());
const unsubscribeQuote = () => (dispatch) => {
  dispatch(doUnsubscribeQuote());
  dispatch(sendUnsubscribeStockQuoteRequest());
};

// UX Actions
export const SELECT_STOCK_LETTER = 'SELECT_STOCK_LETTER';
const selectStockLetter = letter => ({
  type: SELECT_STOCK_LETTER,
  payload: { letter },
});

export const SELECT_STOCK = 'SELECT_STOCK';
const selectStockAction = stock => ({
  type: SELECT_STOCK,
  payload: { stock },
});

const selectStock = stock => (dispatch, getState) => {
  // Cleanup
  const { subscribedQuote, subscribedNews } = getState().ui;
  subscribedNews && dispatch(unsubscribeNews());
  subscribedQuote && dispatch(unsubscribeQuote());

  // UI
  dispatch(selectStockAction(stock));

  // WS
  dispatch(sendStockQuoteRequest(stock));
  dispatch(sendStockPeersRequest(stock));
  dispatch(sendStockNewsRequest(stock));
  dispatch(sendStockChartRequest(stock));
};

export {
  open,
  wsMessage,
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
  wsMessageGetList,
  wsMessageGetQuote,
  wsMessageGetPeers,
  wsMessageGetNews,
  wsMessageGetChart,
  wsMessageUpdateQuote,
  wsMessageUpdateNews,
  subscribeNews,
  unsubscribeNews,
  subscribeQuote,
  unsubscribeQuote,
};
