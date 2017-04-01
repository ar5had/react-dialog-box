import React, { Component } from 'react';

import DialogBox from '../DialogBox/DialogBox';
import Icon from '../Icon/Icon';
import './App.css';
import { EVENT_DIALOG_BOX, TASK_DIALOG_BOX } from '../../constants/dialogBoxConstants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEventDialogBox: false,
      showTaskDialogBox: false    
    }
  }

  toggleDialogBox(type) {
    switch (type) {
      case EVENT_DIALOG_BOX:
        this.setState({showEventDialogBox: !this.state.showEventDialogBox});
        break;
      case TASK_DIALOG_BOX:
        this.setState({showTaskDialogBox: !this.state.showTaskDialogBox});
        break;
      default:
        console.error('DIALOG BOX doesn\'t exit');
        break;
    }
  }

  getDialogBox() {
    const dialogBoxes = [];
    if(this.state.showEventDialogBox) {
      dialogBoxes.push(
        <DialogBox
          type={EVENT_DIALOG_BOX} key="event123"
          close={this.toggleDialogBox.bind(this, EVENT_DIALOG_BOX)}
        />
      );
    }
    if(this.state.showTaskDialogBox) {
      dialogBoxes.push(
        <DialogBox
          type={TASK_DIALOG_BOX}
          key="dialog123"
          close={this.toggleDialogBox.bind(this, TASK_DIALOG_BOX)}
        />
      );
    }
    return dialogBoxes;
  }

  render() {
    return (
      <div className="wrapper" >
        {this.getDialogBox()}
        <div className="app window">
          <div className="title-bar">React Dialog Box</div>
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
              see how dialog box looks on Elementary OS.
            </p>
          </div>
          <div className="btn-wrapper">
            <button className="dialog-btn"
              disabled={this.state.showEventDialogBox}
              onClick={() => {
                this.toggleDialogBox(EVENT_DIALOG_BOX);
              }}
            >
              <Icon id="event-icon" />
              <span>Event</span>
            </button>
            <button className="dialog-btn"
              disabled={this.state.showTaskDialogBox}          
              onClick={() => {
                this.toggleDialogBox(TASK_DIALOG_BOX);
              }}
            >
              <Icon id="task-icon" />            
              <span>Task</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
