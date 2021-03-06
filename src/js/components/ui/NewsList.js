import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import RefreshIcon from './RefreshIcon';

const formatDateTime = (dateString) => {
  const dt = DateTime.fromISO(dateString, { zone: 'America/New_York' });
  return dt.toLocaleString(DateTime.DATETIME_FULL);
};

const NewsList = ({
  news,
  isLoading,
  isSubscribed,
  subscribe,
  unsubscribe,
}) => (
  <Wrapper>
    <p>
      Latest News:
      <RefreshIcon
        active={isSubscribed}
        onClick={isSubscribed ? unsubscribe : subscribe}
      />
    </p>
    <List>
      {news.length > 0 && news.map(({
        url,
        headline,
        source,
        datetime,
      }) => (
        <ListItem key={url}>
          <A href={url} target="_blank">
            <Title>{headline}</Title>
          </A>
          <P>{source} - {formatDateTime(datetime)}</P>
        </ListItem>
      ))}

      {news.length === 0 &&
        <ListItem>{isLoading ? 'Loading...' : 'No Data'}</ListItem>
      }
    </List>
  </Wrapper>
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  isSubscribed: PropTypes.bool,
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
};

const Wrapper = styled.div`
  width: 50%;
  float: left;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  border: 1px solid #ddd;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const Title = styled.h4`
  margin: 0 0 10px 0;
  font-weight: 400;
`;

const P = styled.p`
  margin: 0;
`;

const A = styled.a`
  color: #555;
`;

export default NewsList;
