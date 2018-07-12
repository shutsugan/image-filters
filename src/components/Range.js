import React, {Component} from 'react';

import '../css/Range.css';

class Range extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const filter = Array.from(target.classList).pop();
    const value = target.value;

    this._setFilter(filter, value);
  }

  _setFilter(filter, value) {
    window.Caman('.Canvas__target', function () {
      this[filter](value);
      this.render();
    });
  }

  render() {
    const className = `Range ${this.props.filter}`;
    return(
      <label className="Range__label">
        {this.props.filter}
        <input
          type="range"
          className={className}
          onChange={this.onChange}
          min={this.props.min}
          max={this.props.max}
          defaultValue={0}
          step="1"
        />
      </label>
    );
  }
}

export default Range;
