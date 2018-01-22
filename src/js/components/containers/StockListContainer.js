import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../ui/Button';
import { selectedStockGroup } from '../../reducers/index';
import * as actions from '../../actions/actions';

class StockListContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.selectedStock !== prevProps.selectedStock) {
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

  render() {
    const { stocks, selectStock, selectedStock } = this.props;
    return (
      <StockList>
        {stocks && stocks.map(stock => (
          <Button
            key={stock.symbol}
            value={stock.symbol}
            onClick={selectStock}
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

StockListContainer.propTypes = {
  stocks: PropTypes.array,
  selectStock: PropTypes.func,
  selectedStock: PropTypes.string,
};

const mapStateToProps = state => ({
  selectedStock: state.ui.selectedStock,
  loadingStock: state.ui.loadingQuote,
  stocks: selectedStockGroup(state),
});

const mapDispatchToProps = {
  selectStock: actions.selectStock,
};

const ConnectedStockListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockListContainer);

const StockList = styled.div`
  float: left;
  padding: 10px;
  width: calc(100% - 42px);
  height: 100vh;
  overflow: auto;
`;

export default ConnectedStockListContainer;
