import {
  open,
  message,
  ping,
  pong,
  sendStockListRequest,
  getList,
  getQuote,
  getPeers,
  getNews,
  getChart,
  selectStock,
} from '../actions/actions';

export const handleMessages = dispatch => (event) => {
  const { namespace, name } = JSON.parse(event.data);

  if (namespace === 'get') {
    switch (name) {
      case 'stock.list':
        dispatch(getList(event));
        break;
      case 'stock.quote':
        dispatch(getQuote(event));
        break;
      case 'stock.peers':
        dispatch(getPeers(event));
        break;
      case 'stock.news':
        dispatch(getNews(event));
        break;
      case 'stock.chart':
        dispatch(getChart(event));
        break;
      default:
        dispatch(message(event));
    }
  }

  if (namespace === 'control') {
    switch (name) {
      case 'pong':
        dispatch(pong());
        break;
      default:
        dispatch(message(event));
        break;
    }
  }
};

export const handleOpen = dispatch => (event) => {
  dispatch(open(event));
  dispatch(sendStockListRequest(event));
  // @TODO _ REMOVE
  dispatch(selectStock('AAPL'));

  // Set up Ping/Pong Heartbeat
  // @TODO - don't set this on window...
  window.heartbeatInterval = setInterval(() => {
    dispatch(ping());
  }, 5000);
};
