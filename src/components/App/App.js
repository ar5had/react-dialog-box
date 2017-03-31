import React, { Component } from 'react';

// import Modal from '../Modal/Modal.js';
import Icon from '../Icon/Icon.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-title-bar">React Dialog Box</div>
        <Icon />
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
            like dialog-box. The UI of the dialog box is inspired 
            from dialog box in Elementary OS version of Thunderbird. 
            Check this <a href="https://drive.google.com/open?id=0B4eS4nKUNceueWhlb1lUSE55MnM" target="_blank">page</a> to 
            see how it looks on Elementary OS.
          </p>
        </div>
        <div className="btn-wrapper">
          <button className="dialog-btn">
            <Icon id="event-icon" />
            <span>Event</span>
          </button>
          <button className="dialog-btn">
            <Icon id="task-icon" />            
            <span>Task</span>
          </button>
          <button className="dialog-btn">
            <Icon id="edit-icon" />                        
            <span>Edit</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
