import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { selectedQuote } from '../../reducers/index';
import PeersList from '../ui/PeersList';
import NewsList from '../ui/NewsList';
import { selectStock } from '../../actions/actions';
import Chart from '../ui/Chart';

const Wrapper = styled.div`
  padding: 0 20px;
  float: left;
  width: 75%;
  height: 100vh;
  overflow: auto;
`;

const Price = styled.span`
  font-size: 1.5rem;
  display: block;
`;

const Quote = styled.div`
  border: 1px solid #ddd;
  margin: 20px 0 0;
  padding: 20px 20px 10px;
`;

const formatDateTime = (dateString) => {
  const dt = DateTime.fromMillis(dateString, { zone: 'America/New_York' });
  return dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};

class QuoteContainer extends Component {
  componentDidMount() {}
  render() {
    const {
      quote,
      peers,
      news,
      chart,
      ui,
      onSelectStock,
    } = this.props;

    if (!quote) return null;

    const {
      companyName,
      symbol,
      latestPrice,
      sector,
      latestUpdate,
      open,
      close,
    } = this.props.quote;

    return (
      <Wrapper>
        <h2>{companyName} ({symbol})</h2>
        <p>Sector: {sector || '(none)'}</p>

        <Quote>
          <Price>{latestPrice.toFixed(2)} USD</Price>
          <p>Last Updated: {formatDateTime(latestUpdate)} EST</p>
          <p>Open: {open.toFixed(2)} | Close: {close.toFixed(2)}</p>
        </Quote>
        <PeersList peers={peers} isLoading={ui.loadingPeers} onClick={onSelectStock} />
        <NewsList news={news} isLoading={ui.loadingNews} />
        <Chart chart={chart} isLoading={ui.loadingChart} />
      </Wrapper>
    );
  }
}

QuoteContainer.propTypes = {
  quote: PropTypes.object,
  peers: PropTypes.array,
  news: PropTypes.array,
  chart: PropTypes.array,
  ui: PropTypes.object,
  onSelectStock: PropTypes.func,
};

const mapStateToProps = state => ({
  ui: state.ui,
  peers: state.peers,
  news: state.news,
  chart: state.chart,
  quote: selectedQuote(state),
});

const mapDispatchToProps = {
  onSelectStock: selectStock,
};

const ConnectedQuoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuoteContainer);

export default ConnectedQuoteContainer;
