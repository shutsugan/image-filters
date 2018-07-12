import React, { Component } from 'react';
import Controllers from './Controllers';
import Canvas from './Canvas';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controllers />
        <Canvas />
      </div>
    );
  }
}

export default App;
