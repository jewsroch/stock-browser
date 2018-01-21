import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const BaseButton = styled.button`
  border: 1px solid #ddd;
  display: block;
  margin: 5px 0;
  padding: 5px;
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
    const { disabled, children, selected } = this.props;
    return (
      <BaseButton
        {...this.props}
        selected={selected}
        onClick={this.click}
        disabled={disabled}
      >
        {children}
      </BaseButton>);
  }
}

export default Button;
