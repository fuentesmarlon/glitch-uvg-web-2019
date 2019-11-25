import React from 'react';
import './index.css';

class Logo extends React.Component {
  render() {
    return (
      <div clasName="Container">
        <img alt="homepageandshiz" src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" ref={window.scrollTo(0, 250)} className="mainLogo" />

        <span className="tag">conocer más</span>
      </div>
    );
  }
}

export default Logo;
