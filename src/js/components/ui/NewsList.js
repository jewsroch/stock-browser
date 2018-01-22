import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

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

const formatDateTime = (dateString) => {
  const dt = DateTime.fromISO(dateString, { zone: 'America/New_York' });
  return dt.toLocaleString(DateTime.DATETIME_FULL);
};


const NewsList = ({ news }) => (
  <Wrapper>
    <p>Latest News:</p>
    <List>
      {news.map(({
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
    </List>
  </Wrapper>
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
