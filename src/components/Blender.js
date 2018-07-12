import React, {Component} from 'react';
import Button from './Button';

import '../css/Blender.css';

class Blender extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const target = event.target;
    const blender = Array.from(target.classList).pop();

    this._setBender(blender);
  }

  _setBender(blender) {
    window.Caman('.Canvas__target', function () {
      this[blender]().render();
    });
  }

  render() {
    const className = `Blender ${this.props.blender}`;
    return(
      <Button
        name={this.props.name}
        onClick={this.onClick}
        className={className}
      />
    );
  }
}

export default Blender;
