import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import { lettersArray } from '../../reducers/stocks-initial-state';

const List = styled.div`
  float: left;
  padding: 10px;
  width: 42px;
  border-right: 1px solid #ddd;
  text-align: center;
  height: 100vh;
`;


const LetterList = ({ selectedLetter, stocks, onClick }) => (
  <List>
    {lettersArray.map(l => (
      <Button
        key={l}
        width="21px"
        textAlign="center"
        fontSize=".5rem"
        padding="3px"
        value={l}
        selected={l === selectedLetter}
        disabled={stocks[l].length === 0}
        onClick={onClick}
      >
        {l}
      </Button>
    ))}
  </List>
);

LetterList.propTypes = {
  selectedLetter: PropTypes.string.isRequired,
  stocks: PropTypes.object,
  onClick: PropTypes.func,
};

export default LetterList;
