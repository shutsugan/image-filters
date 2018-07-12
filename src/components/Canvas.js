import React, {Component} from 'react';
import Uploader from './Uploader';
import Button from './Button';

import '../css/Canvas.css';

class Canvas extends Component {
  constructor() {
    super();

    this._getFile = this._getFile.bind(this);
    this._setDownload = this._setDownload.bind(this);
    this._reset = this._reset.bind(this);
  }

  componentDidMount() {
    this._canvas = document.querySelector('.Canvas__target');
		this._context = this._canvas.getContext('2d');

    this._image = new Image();
    this._name;
  }

  _getFile(event) {
		const file = event.target.files[0];
		const reader = new FileReader();

		if (file) {
			this._name = file.name;
			reader.readAsDataURL(file);
		}

		reader.addEventListener('load', _ => this._setCanvas(reader));
	}

  _setCanvas(reader) {
		const img = this._image;

		img.src = reader.result;
		img.onload = _ => {
			this._canvas.width = img.width;
			this._canvas.height = img.height;
			this._context.drawImage(img, 0, 0, img.width, img.height);
			this._canvas.removeAttribute('data-caman-id');
		}
	}

  _setDownload() {
    const file_extention = this._name.slice(-4);
    const extention = ['.jpg', '.png'];
    let file_name;

    if (extention.includes(file_extention)) {
      file_name = this._name.substring(0, this._name.length - 4) + '-edited.jpg';
      this._download(this._canvas, file_name);
    }
  }

  _download(canvas, name) {
		const event = new MouseEvent('click');
		const link = document.createElement('a');
		link.download = name;
		link.href = canvas.toDataURL('image/jpeg', .8);


		link.dispatchEvent(event)
	}

  _reset() {
    console.log('reset ...');
	}

  render() {
    return(
      <div className="Canvas">
        <Uploader onChange={this._getFile}/>
        <canvas className="Canvas__target"></canvas>
        <div className="Canvas__buttons">
          <Button name="Download" onClick={this._setDownload} />
          <Button name="Reset" onClick={this._reset} />
        </div>
      </div>
    );
  }
}

export default Canvas;
