import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const BaseButton = styled.button`
  border: 1px solid #ddd;
  display: ${props => props.display || 'block'};
  margin: ${props => props.margin || '5px 0'};
  padding: ${props => props.padding || '5px'};
  font-size: ${props => props.fontSize || '11px'};
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.textAlign || 'left'};
  border-radius: 2px;

  &:disabled {
    background: #eee;
  }
  &:hover:enabled {
    border: 1px solid #999;
    box-shadow: #ddd 1px 1px 2px
  }

  ${props => props.selected && css`
    border-color: #999;
    background-color: #666;
    color: #fff;
  `}
`;

class Button extends Component {
  click = () => {
    this.props.onClick(this.props.value);
  }

  render() {
    return (
      <BaseButton
        {...this.props}
        onClick={this.click}
      >
        {this.props.children}
      </BaseButton>);
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.string,
  buttonRef: PropTypes.func,
};

export default Button;
