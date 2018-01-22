import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Wrapper = styled.div`
  clear: both;
`;

const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 37px;
`;

const ListItem = styled.li`
  display: inline-block;
`;

const P = styled.p`
  display: inline-block;
`;

const PeersList = ({ peers, onClick }) => (
  <Wrapper>
    <P>Peers:</P>
    <List>
      {peers.length > 0 && peers.map(peer => (
        <ListItem key={peer}>
          <Button
            margin="5px 5px"
            width="52px"
            textAlign="center"
            display="inline-block"
            value={peer}
            onClick={onClick}
          >
            {peer}
          </Button>
        </ListItem>
      ))}

      {peers.length === 0 &&
        <ListItem>
          <Button
            margin="5px 5px"
            textAlign="center"
            display="inline-block"
          >
            Loading...
          </Button>
        </ListItem>
      }
    </List>
  </Wrapper>
);

PeersList.propTypes = {
  peers: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PeersList;
