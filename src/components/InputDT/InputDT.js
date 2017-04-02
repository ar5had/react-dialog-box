import React, { Component } from 'react';

import './InputDT.css';

import { getLabelWithAccessCode as getLabel, appendZero } from '../../utils/getLabelWithAccessCode';

class InputDT extends Component {

  componentDidMount() {
    const d = new Date();
    const yy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    const hhh = appendZero(d.getHours());
    const mmm = appendZero(d.getMinutes());  
    this.date.value = `${yy}-${appendZero(mm)}-${appendZero(dd)}`;
    this.time.value = `${hhh}:${mmm}` 
  }

  render() {
    const { 
      label, accessCharPos,
      width
    } = this.props;
    
    
    return (
      <div className="input-elem">
        <div className={`${width} label-wrapper`} > 
          { getLabel(label, accessCharPos) }:
        </div>
        <div className={`${width} input-wrapper`} >
          <input
            ref={node => this.date = node }
            className="date-input"
            type='date'
          />
          <input
            ref={node => this.time = node }            
            className="time-input"            
            type='time'
          />
        </div> 
      </div>
    );
  }
}

export default InputDT;
