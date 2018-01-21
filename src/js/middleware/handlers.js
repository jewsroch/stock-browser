import {
  open,
  message,
  ping,
  pong,
} from '../actions/actions';

export const handleMessages = dispatch => (event) => {
  const { name } = JSON.parse(event.data);
  switch (name) {
    case 'pong':
      dispatch(pong());
      break;
    default:
      dispatch(message(event));
  }
};

export const handleOpen = dispatch => (event) => {
  dispatch(open(event));

  // Set up Ping/Pong Heartbeat
  // @TODO - don't set this on window...
  window.heartbeatInterval = setInterval(() => {
    dispatch(ping());
  }, 5000);
};
