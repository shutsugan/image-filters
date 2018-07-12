import React, {Component} from 'react';
import Range from './Range';
import Blender from './Blender';

import '../css/Controllers.css';

class Controllers extends Component {
  constructor() {
    super();

    this._filters = [
      'brightness',
      'contrast',
      'saturation',
      'exposure',
      'vibrance',
      'hue',
      'gamma',
      'clip',
      'stackBlur',
      'sepia',
      'noise',
      'sharpen'
    ];

    this._blenders = [
      'vintage',
      'lomo',
      'clarity',
      'sinCity',
      'sunrise',
      'crossProcess',
      'orangePeel',
      'love',
      'grungy',
      'jarques',
      'pinhole',
      'oldBoot',
      'glowingSun',
      'hazyDays',
      'herMajesty',
      'nostalgia',
      'hemingway',
      'concentrate'
    ];
  }

  render() {
    const rangs = this._filters.map((filter, index) => {
      if (index <= 5) return <Range key={index} filter={filter} min={-100} max={100} />
      return <Range key={index} filter={filter} min={0} max={100} />
    });

    const button_blenders = this._blenders.map((blender, index) => {
        const blender_name = blender.charAt(0).toUpperCase() + blender.slice(1);
        return <Blender key={index} name={blender_name} blender={blender} />
    });

    return(
      <div className="Controllers">
        <h3 className="Controllers__header">Filters</h3>
        <div className="Controllers__filters">{rangs}</div>
        <h3 className="Controllers__header">Blenders</h3>
        <div className="Controllers__blenders">{button_blenders}</div>
      </div>
    );
  }
}

export default Controllers;
