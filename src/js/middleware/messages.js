// @TODO - Generate IDs?

const buildMessage = (namespace, name, stock) => {
  const message = {
    id: 'id', // TODO GENERATE,
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


export {
  getStockList,
  getStockQuote,
  getStockPeers,
  getStockNews,
  getStockChart,
};
