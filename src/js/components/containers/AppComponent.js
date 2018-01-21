import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

const Title = styled.h1`
  font-size: 2rem;
  font-family: sans-serif;
`;

class AppComponent extends Component {
  componentDidMount() {
    // this.props.wsConnect();
  }

  render() {
    return (
      <Fragment>
        <Title>Stock Explorer</Title>
      </Fragment>
    );
  }
}

AppComponent.propTypes = {
  wsSend: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  wsSend: actions.send,
};

const ConnectedAppComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export default ConnectedAppComponent;
