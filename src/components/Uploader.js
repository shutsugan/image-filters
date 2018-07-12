import React, {Component} from 'react';

import '../css/Uploader.css';

const Uploader = props => (
  <label className="upload-wrapper button button-specs">
    Upload file!
    <input className="Canvas__upload" onChange={props.onChange} type="file" name="file" />
  </label>
);

export default Uploader;
