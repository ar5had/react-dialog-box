import React, { Component } from 'react';

import { EVENT_DIALOG_BOX, TASK_DIALOG_BOX } from '../../constants/dialogBoxConstants';
import './DialogBox.css';
import objectAssign from 'object-assign';

class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = this.getState(props.type);
  }

  getState(type) {
    switch (type) {
      case EVENT_DIALOG_BOX:
        return require('../../db-configs/eventConfig');
      case TASK_DIALOG_BOX:
        return require('../../db-configs/taskConfig');
      default:
        console.error('BAD DIALOG BOX TYPE passed to DIALOG BOX component!');
    } 
  }

  render() {
    const config = objectAssign({}, this.state.config);

    return (
      <div className="dbWrapper" ref={ node => this.box = node }>
        <div className="dialog-box window">
          <div className="title-bar">
            <div className="icon-wrapper"
              onClick={() => {
                this.box.classList.add('close');
                setTimeout(() => this.props.close(), 400);
              }}
            >
              <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 174.239 174.239" width="8px" height="8px">
                <path d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047  c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077  L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802  c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077  l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z" fill="#888"/>
              </svg>
            </div>
            {config.title}
          </div>
        </div>
      </div>
    );
  }
}

export default DialogBox;
