import {
  WS_CONNECT,
  WS_SEND,
  WS_OPEN,
  WS_MESSAGE,
  WS_CLOSE,
  WS_PING,
  WS_MESSAGE_PONG,
} from './action-types';

// Websocket Actions
const createMessageAction = type => event => ({
  type,
  payload: {
    data: JSON.parse(event.data),
    event,
  },
});

const message = createMessageAction(WS_MESSAGE);

const open = event => ({
  type: WS_OPEN,
  payload: {
    event,
  },
});

const close = event => ({
  type: WS_CLOSE,
  payload: {
    event,
  },
});

// @TODO - Move url to config somewhere?
const connect = () => ({
  type: WS_CONNECT,
  payload: {
    url: 'wss://stock-browser.herokuapp.com/',
  },
});

const send = messagePayload => ({
  type: WS_SEND,
  payload: messagePayload,
});

const ping = () => ({
  type: WS_PING,
  payload: {
    name: 'ping',
  },
});

const pong = () => ({
  type: WS_MESSAGE_PONG,
});

export {
  open,
  message,
  close,
  connect,
  send,
  ping,
  pong,
};
