import {
  open,
  wsMessage,
  ping,
  pong,
  wsMessageGetList,
  wsMessageGetQuote,
  wsMessageGetPeers,
  wsMessageGetNews,
  wsMessageGetChart,
  selectStock,
  wsMessageUpdateQuote,
  wsMessageUpdateNews,
  sendStockListRequest,
} from '../actions/actions';

const handleMessages = dispatch => (event) => {
  const { namespace, name } = JSON.parse(event.data);

  // Data (get) Responses
  if (namespace === 'get') {
    switch (name) {
      case 'stock.list':
        dispatch(wsMessageGetList(event));
        break;
      case 'stock.quote':
        dispatch(wsMessageGetQuote(event));
        break;
      case 'stock.peers':
        dispatch(wsMessageGetPeers(event));
        break;
      case 'stock.news':
        dispatch(wsMessageGetNews(event));
        break;
      case 'stock.chart':
        dispatch(wsMessageGetChart(event));
        break;
      default:
        dispatch(wsMessage(event));
    }
  }

  // Subscription Updates
  if (namespace === undefined) {
    switch (name) {
      case 'stock.news':
        dispatch(wsMessageUpdateNews(event));
        break;
      case 'stock.quote':
        dispatch(wsMessageUpdateQuote(event));
        break;

      default:
        dispatch(wsMessage(event));
    }
  }

  // Control Messages
  if (namespace === 'control') {
    switch (name) {
      case 'pong':
        dispatch(pong());
        break;
      default:
        dispatch(wsMessage(event));
        break;
    }
  }
};

const handleOpen = dispatch => (event) => {
  dispatch(open(event));

  // Fetch Stocks (A group is hardcoded)
  dispatch(sendStockListRequest(event));

  // Preselect First Stock
  dispatch(selectStock('A'));

  // Set up Ping/Pong Heartbeat
  // @TODO - don't set this on window...
  window.heartbeatInterval = setInterval(() => {
    dispatch(ping());
  }, 5000);
};

export { handleMessages, handleOpen };
