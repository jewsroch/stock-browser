import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { buildChangeSpan } from './helpers';

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

const Chart = ({ chart, isLoading }) => {
  const hasData = chart.length > 0;
  const yearDelta = hasData &&
    buildChangeSpan(chart[0].open, chart[chart.length - 1].close);
  return (
    <Wrapper>
      <p>
        2018 Change: {hasData ? yearDelta : '(Loading...)'}
      </p>
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
          {hasData && chart.map(({
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

          {!hasData &&
            <tr>
              <td>{isLoading ? 'Loading...' : 'No Data'}</td>
              <td />
              <td />
              <td />
            </tr>
          }
        </tbody>
      </Table>
    </Wrapper>
  );
};

Chart.propTypes = {
  chart: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default Chart;
