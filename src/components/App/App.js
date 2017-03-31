import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-title-bar">React Dialog Box</div>
        <div className="app-header">
          <div className="logo-wrapper">
            <svg className="app-logo" version="1.1" width="184px"
            height="166px" viewBox="0 0 184 166"
            >
              <g transform="translate(92 83)">
                <circle r="12" />
                <g fill="none" stroke="#222" >
                  <ellipse rx="84" ry="32" />
                  <ellipse rx="84" ry="32" transform="rotate(120)" />
                  <ellipse rx="84" ry="32" transform="rotate(60)" />
                </g>
              </g>
            </svg>
          </div>
          <h2 className="app-heading">React Dialog Box</h2>
          <p className="app-description">
            Click any of the below buttons to get Thunderbird 
            like dialog-box. The UI of the dialog box is inspired from dialog box in Elementary OS version 
            of Thunderbird.
          </p>
        </div>
        <div className="btn-wrapper">
          <button className="dialog-btn">Event</button>
          <button className="dialog-btn">Task</button>
          <button className="dialog-btn">Edit</button>
        </div>
      </div>
    );
  }
}

export default App;
