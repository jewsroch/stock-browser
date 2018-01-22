import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { selectedQuote } from '../../reducers/index';
import PeersList from '../ui/PeersList';
import NewsList from '../ui/NewsList';
import { selectStock, subscribeNews, unsubscribeNews, unsubscribeQuote, subscribeQuote } from '../../actions/actions';
import Chart from '../ui/Chart';
import RefreshIcon from '../ui/RefreshIcon';
import { buildChangeSpan } from '../ui/helpers';

const Wrapper = styled.div`
  padding: 0 20px;
  float: left;
  width: 75%;
  height: 100vh;
  overflow: auto;
`;

const Price = styled.span`
  font-size: 1.5rem;
  display: inline-block;
`;

const Change = styled.span`
  font-size: 1rem;
  display: inline-block;
  margin-left: 5px;
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
  subscribeToQuote = () => {
    this.props.onSubscribeQuote(this.props.ui.selectedStock);
  }

  render() {
    const {
      quote,
      peers,
      news,
      chart,
      ui,
      onSelectStock,
      onSubscribeNews,
      onUnsubscribeNews,
      onUnsubscribeQuote,
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
          <Change>{buildChangeSpan(latestPrice, close)}</Change>
          <p>
            Last Updated: {formatDateTime(latestUpdate)}
            <RefreshIcon
              active={ui.subscribedQuote}
              onClick={ui.subscribedQuote ? onUnsubscribeQuote : this.subscribeToQuote}
            />
          </p>
          <p>Open: {open.toFixed(2)} | Close: {close.toFixed(2)}</p>
        </Quote>
        <PeersList peers={peers} isLoading={ui.loadingPeers} onClick={onSelectStock} />
        <NewsList
          news={news}
          isLoading={ui.loadingNews}
          isSubscribed={ui.subscribedNews}
          subscribe={onSubscribeNews}
          unsubscribe={onUnsubscribeNews}
        />
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
  onSubscribeNews: PropTypes.func,
  onUnsubscribeNews: PropTypes.func,
  onSubscribeQuote: PropTypes.func,
  onUnsubscribeQuote: PropTypes.func,
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
  onSubscribeNews: subscribeNews,
  onUnsubscribeNews: unsubscribeNews,
  onSubscribeQuote: subscribeQuote,
  onUnsubscribeQuote: unsubscribeQuote,
};

const ConnectedQuoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuoteContainer);

export default ConnectedQuoteContainer;
