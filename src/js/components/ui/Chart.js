import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const Wrapper = styled.div`
  width: 50%;
  float: left;
  padding: 0 10px 0 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td, th {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: center;
  }
`;

const RedSpan = styled.span`
  color: #dd4b39;
`;

const GreenSpan = styled.span`
  color: #3d9400;
`;

const buildChangeSpan = (open, close) => {
  const delta = (close - open).toFixed(2);
  if (delta < 0) {
    return <RedSpan>{`${delta}`}</RedSpan>;
  }
  return <GreenSpan>{`+${delta}`}</GreenSpan>;
};

const Chart = ({ chart }) => {
  const hasData = chart.length > 0;
  const yearDelta = hasData &&
    buildChangeSpan(chart[0].open, chart[chart.length - 1].close);
  return (
    <Wrapper>
      <p>
        2018 Change: {hasData ? yearDelta : '(Loading...)'}
      </p>
      {hasData &&
        <Table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Open</th>
              <th>Close</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {chart.map(({
              label,
              open,
              close,
              date,
            }) => (
              <tr key={date}>
                <td>{label}</td>
                <td>{open.toFixed(2)}</td>
                <td>{close.toFixed(2)}</td>
                <td>{buildChangeSpan(open, close)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </Wrapper>
  );
};

Chart.propTypes = {
  chart: PropTypes.array.isRequired,
};

export default Chart;
