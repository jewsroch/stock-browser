import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { lettersArray } from '../../reducers/stocks-initial-state';
import { Container } from '../ui/Elements';
import Button from '../ui/Button';
import QuoteContainer from './QuoteContainer';

// const LetterButton = Button.extend`
//   width: 25px;
//   text-align: center;
// `;

const StockPicker = styled.div`
  float: left;
  width: 25%;
  height: 100vh;
`;

const LetterList = Container.extend`
  float: left;
  width: 15%;
  min-width: 45px;
  border-right: 1px solid #ddd;
  text-align: center;
  height: 100vh;
`;

const StockList = Container.extend`
  float: left;
  width: 85%;
  height: 100vh;
  overflow: auto;
`;

class AppComponent extends Component {
  componentDidMount() {
    this.props.wsConnect();
  }

  selectStockGroup= (letter) => {
    this.props.selectStockLetter(letter);
  }

  render() {
    const {
      stocks,
      selectedLetter,
      selectStock,
      selectedStock,
    } = this.props;
    return (
      <Fragment>
        <StockPicker>
          <LetterList>
            {stocks && lettersArray.map(l => (
              <Button
                key={l}
                width="25px"
                textAlign="center"
                value={l}
                selected={l === selectedLetter}
                disabled={stocks[l].length === 0}
                onClick={this.selectStockGroup}
              >
                {l}
              </Button>
            ))}
          </LetterList>
          <StockList>
            {stocks && stocks[selectedLetter].map(stock => (
              <Button
                key={stock.symbol}
                value={stock.symbol}
                onClick={selectStock}
                selected={stock === selectedStock}
              >
                <strong>{stock.symbol}</strong> - {stock.name}
              </Button>
            ))}
          </StockList>
        </StockPicker>
        <QuoteContainer />

      </Fragment>
    );
  }
}

AppComponent.propTypes = {
  wsConnect: PropTypes.func.isRequired,
  selectStockLetter: PropTypes.func.isRequired,
  stocks: PropTypes.objectOf(PropTypes.array).isRequired,
  selectedLetter: PropTypes.string,
  selectedStock: PropTypes.string,
  selectStock: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stocks: state.stocks,
  selectedLetter: state.ui.selectedLetter,
  selectedStock: state.ui.selectedStock,
});

const mapDispatchToProps = {
  wsSend: actions.send,
  wsConnect: actions.connect,
  selectStockLetter: actions.selectStockLetter,
  selectStock: actions.selectStock,
};

const ConnectedAppComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export default ConnectedAppComponent;
