import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import QuoteContainer from './QuoteContainer';
import LetterList from '../ui/LetterList';
import StockListContainer from './StockListContainer';

const StockPicker = styled.div`
  float: left;
  width: 25%;
  min-width: 280px;
  height: 100%;
`;

class AppComponent extends Component {
  componentDidMount() {
    this.props.wsConnect();
  }

  render() {
    const {
      stocks,
      selectedLetter,
      selectStockLetter,
    } = this.props;
    return (
      <Fragment>
        <StockPicker>
          <LetterList
            selectedLetter={selectedLetter}
            stocks={stocks}
            onClick={selectStockLetter}
          />
          <StockListContainer />
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
};

const mapStateToProps = state => ({
  stocks: state.stocks,
  selectedLetter: state.ui.selectedLetter,
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
