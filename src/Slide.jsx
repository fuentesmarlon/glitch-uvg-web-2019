import React, { Component } from 'react';
import './Slide.css';

const { imgPath } = this.props;
const { txtColor } = this.props;
const { bgColor } = this.props;
const { shadow } = this.props;
const { title } = this.props;
const { description } = this.props;

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const image = {
      backgroundImage: `url(${imgPath})`,
      width: '1000px',
      height: '385px',
      zoom: '0.8',
      margin: 'auto auto auto auto',
    };

    const bgColorino = {
      background: `#${bgColor}`,
    };

    const textColor = {
      color: `#${txtColor}`,
    };

    const textShadow = {
      color: `#${txtColor}`,
      textShadow: '0 1px 4px rgba(0,0,0,0.25)',
    };

    return (
      <div className="slideContainer" style={bgColorino}>
        <h1 style={shadow ? textShadow : textColor}>{title}</h1>
        <h2 style={textColor}>{description}</h2>
        <button type="button">Add DuckDuckGo to Chrome</button>
        <div className="slideImage" style={image} />
      </div>
    );
  }
}

export default Slide;
