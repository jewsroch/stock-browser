// Websocket Actions
const createMessageAction = type => event => ({
  type,
  payload: {
    data: JSON.parse(event.data),
    event,
  },
});

export const WS_MESSAGE = 'WS_MESSAGE';
const message = createMessageAction(WS_MESSAGE);
export const WS_GET_STOCK_QUOTE = 'WS_GET_STOCK_QUOTE';
const getQuote = createMessageAction(WS_GET_STOCK_QUOTE);

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

// @TODO - Move url to config somewhere?
export const WS_CONNECT = 'WS_CONNECT';
const connect = () => ({
  type: WS_CONNECT,
  payload: {
    url: 'wss://stock-browser.herokuapp.com/',
  },
});

export const WS_DISCONNECT = 'WS_DISCONNECT';

export const WS_SEND = 'WS_SEND';
const send = messagePayload => ({
  type: WS_SEND,
  payload: messagePayload,
});

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
  selectStock,
  getQuote,
};
