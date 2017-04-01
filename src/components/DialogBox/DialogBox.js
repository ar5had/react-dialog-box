import React, { Component } from 'react';

import { EVENT_DIALOG_BOX, TASK_DIALOG_BOX } from '../../constants/dialogBoxConstants';
import './DialogBox.css';
import objectAssign from 'object-assign';

class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = this.getState(props.type);
    // Binded here so that event listener can be removed
    // in the onMouseDown method
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
    this.dx = 0;
    this.dy = 0;
    this.tb.classList.add('mousedown');
    // start dragging when element is hold more than 400ms
    // this removes stuttering
    setTimeout(() => {
      this.box.addEventListener('mousemove', this.onMouseMove);
    }, 150);
  }

  onMouseUp(e) {
    e.stopPropagation();
    e.preventDefault(); 
    this.x = e.clientX;
    this.y = e.clientY;
    this.tb.classList.remove('mousedown');
    this.box.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(e) {
    const dx = e.clientX - this.x;
    const dy = e.clientY - this.y;    
    this.x = e.clientX;
    this.y = e.clientY;
    let top = parseFloat(this.getStyleProp(this.box, 'top'));
    let left = parseFloat(this.getStyleProp(this.box, 'left'));
    top += dy;
    left += dx;
    top = top < 15 ? 15 : top;
    left = left < 15 ? 15 : left;    
    this.box.style.top = `${top}px`;
    this.box.style.left = `${left}px`;
    console.log(dx, dy, top, left);
  }

  getStyleProp(node, prop) {
    return window.getComputedStyle(node).getPropertyValue(prop);
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
      <div className={`dbWrapper`} ref={ node => this.box = node } >
        <div className="dialog-box window">
          <div className="title-bar dialog-title-bar"
            ref={ node => this.tb = node }
            onMouseDown={this.onMouseDown.bind(this)}
            onMouseUp={this.onMouseUp.bind(this)}
          >
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
