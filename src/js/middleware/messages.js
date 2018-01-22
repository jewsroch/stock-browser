import shortid from 'shortid';

const buildMessage = (namespace, name, stock) => {
  const message = {
    id: shortid.generate(), // TODO GENERATE,
    namespace,
    name,
  };
  if (stock) message.args = { stock };
  return message;
};

const getStockList = () => buildMessage('get', 'stock.list');
const getStockQuote = stock => buildMessage('get', 'stock.quote', stock);
const getStockPeers = stock => buildMessage('get', 'stock.peers', stock);
const getStockNews = stock => buildMessage('get', 'stock.news', stock);
const getStockChart = stock => buildMessage('get', 'stock.chart', stock);

const subscribeStockNews = stock => buildMessage('subscribe', 'stock.news', stock);
const unsubscribeStockNews = () => buildMessage('unsubscribe', 'stock.news');

const subscribeStockQuote = stock => buildMessage('subscribe', 'stock.quote', stock);
const unsubscribeStockQuote = () => buildMessage('unsubscribe', 'stock.quote');


export {
  getStockList,
  getStockQuote,
  getStockPeers,
  getStockNews,
  getStockChart,
  subscribeStockNews,
  unsubscribeStockNews,
  subscribeStockQuote,
  unsubscribeStockQuote,
};
