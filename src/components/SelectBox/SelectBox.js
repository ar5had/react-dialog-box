import React, { Component } from 'react';

import './SelectBox.css';

import { getLabelWithAccessCode as getLabel } from '../../utils/getLabelWithAccessCode';

class SelectBox extends Component {

  render() {
    const { 
      label, accessCharPos, dataType,
      width, boundToTitleBar, options
    } = this.props;
    return (
      <div className="select-box-elem">
        <div className={`${width} label-wrapper`}
          onClick={(e) => {
            //this.selectBox.focus();
          }}
        > 
          { getLabel(label, accessCharPos) }:
        </div>
        <div className={`${width} select-box-wrapper`} >
          
        </div> 
      </div>
    );
  }
}

export default SelectBox;
