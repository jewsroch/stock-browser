// @TODO - Generate IDs?
const getStockList = () => ({
  id: 'id1',
  namespace: 'get',
  name: 'stock.list',
});

const getStockQuote = stock => ({
  id: 'id2',
  namespace: 'get',
  name: 'stock.quote',
  args: {
    stock,
  },
});

export {
  getStockList,
  getStockQuote,
};
