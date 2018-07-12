import React, {Component} from 'react';

import '../css/Button.css';

const Button = props => (
  <button className="Button button button-specs" onClick={props.onClick}>
    {props.name}
  </button>
);

export default Button;
