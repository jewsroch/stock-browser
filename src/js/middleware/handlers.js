import {
  open,
  message,
  ping,
  pong,
  send,
} from '../actions/actions';
import { getStockList } from './messages';

export const handleMessages = dispatch => (event) => {
  const { name } = JSON.parse(event.data);
  switch (name) {
    case 'pong':
      dispatch(pong());
      break;
    default:
      dispatch(message(event));
      break;
  }
};

export const handleOpen = dispatch => (event) => {
  dispatch(open(event));
  dispatch(send(getStockList()));

  // Set up Ping/Pong Heartbeat
  // @TODO - don't set this on window...
  window.heartbeatInterval = setInterval(() => {
    dispatch(ping());
  }, 5000);
};
