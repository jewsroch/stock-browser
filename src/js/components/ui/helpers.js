import React from 'react';
import styled from 'styled-components';

const RedSpan = styled.span`
  color: #dd4b39;
`;

const GreenSpan = styled.span`
  color: #3d9400;
`;

export const buildChangeSpan = (open, close) => {
  const delta = (close - open).toFixed(2);
  if (delta < 0) {
    return <RedSpan>{`${delta}`}</RedSpan>;
  }
  return <GreenSpan>{`+${delta}`}</GreenSpan>;
};

export default {};
