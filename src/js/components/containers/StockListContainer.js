import React, { Component } from 'react';
import styled from 'styled-components';
import reduxStore, { rxjsStoreFinal$, rxjsActions$ } from '../../configure-store';

import Button from '../ui/Button';
import { selectedStockGroup } from '../../reducers/index';
import * as actions from '../../actions/actions';

class StockListContainer extends Component {
  state = {
    stocks: [],
    selectedStock: null,
  }

  componentDidMount() {
    rxjsStoreFinal$
      .map((state) => {
        const stocks = selectedStockGroup(state);
        const { selectedStock } = state.ui;
        return { stocks, selectedStock };
      })
      .distinctUntilChanged((a, b) =>
        (a.stocks.length === b.stocks.length) && (a.selectedStock === b.selectedStock))
      .subscribe((state) => {
        console.log('****STATE CHANGED****', state);
        this.setState(state);
      });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.selectedStock !== prevState.selectedStock) {
      this.scrollIntoView();
    }
  }

  setRef = (node) => {
    if (node && node.selected) {
      this.selectedElement = node;
    }
  }

  scrollIntoView() {
    if (this.selectedElement && this.selectedElement.scrollIntoView) {
      this.selectedElement.scrollIntoView();
    }
  }

  selectStock = (stock) => {
    const action = actions.selectStock(stock);
    const dispatch = a => rxjsActions$.next(a);
    const getState = () => ({ ui: {} }); // selectStock action cleans up old subs based on UI state.
    action(dispatch, getState); // Hack for thunk actions
    reduxStore.dispatch(action); // Hack to still dispatch to normal redux for rest of app.
  }

  render() {
    const { stocks, selectedStock } = this.state;
    return (
      <StockList>
        {stocks && stocks.map(stock => (
          <Button
            key={stock.symbol}
            value={stock.symbol}
            onClick={this.selectStock}
            selected={stock.symbol === selectedStock}
            innerRef={this.setRef}
          >
            <strong>{stock.symbol}</strong> - {stock.name}
          </Button>
        ))}
      </StockList>
    );
  }
}

// StockListContainer.propTypes = {
//   selectStock: PropTypes.func,
// };

// const mapDispatchToProps = {
//   selectStock: actions.selectStock,
// };

// const ConnectedStockListContainer = connect(
//   {},
//   mapDispatchToProps,
// )(StockListContainer);

const StockList = styled.div`
  float: left;
  padding: 10px;
  width: calc(100% - 42px);
  height: 100vh;
  overflow: auto;
`;

export default StockListContainer;
