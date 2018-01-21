import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { selectedQuote } from '../../reducers/index';

const Wrapper = styled.div`
  // float: right;
  font-size: 2rem;
`;

class QuoteContainer extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.quote && this.props.quote.latestPrice}
      </Wrapper>
    )
  }
}

QuoteContainer.propTypes = {
  prop: PropTypes
}

const mapStateToProps = state => ({
  selectedStock: state.ui.selectedStock,
  loadingQuote: state.ui.loadingQuote,
  quote: selectedQuote(state),
});

const mapDispatchToProps = {

};

const ConnectedQuoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuoteContainer);

export default ConnectedQuoteContainer;
