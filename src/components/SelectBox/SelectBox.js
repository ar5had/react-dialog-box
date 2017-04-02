import React, { Component } from 'react';

import './SelectBox.css';

import { DIVIDER } from '../../constants/dialogBoxConstants';
import { getLabelWithAccessCode as getLabel } from '../../utils/getLabelWithAccessCode';

class SelectBox extends Component {

  getOptions(options) {
    return options.map(
      (elem, i) => {
        if(elem === DIVIDER)
          return <option disabled key={i}>────────────</option>; 
        else
          return <option key={i} >{elem}</option>;
      }
    );
  }

  render() {
    const { 
      label, accessCharPos,
      width, options
    } = this.props;
    return (
      <div className={`select-box-elem ${width}`} >
        <div className={`${width} slabel-wrapper`}
          onClick={(e) => {
            this.selectBox.focus();
          }}
        > 
          { getLabel(label, accessCharPos) }:
        </div>
        <div className={`${width} select-box-wrapper`} >
          <select ref={node => this.selectBox = node} >
            {this.getOptions(options)}
          </select>
        </div> 
      </div>
    );
  }
}

export default SelectBox;
