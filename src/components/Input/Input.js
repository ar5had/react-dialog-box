import React, { Component } from 'react';

import './Input.css';

import { getLabelWithAccessCode as getLabel } from '../../utils/getLabelWithAccessCode';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.placeholder ? props.placeholder : ''
    }
  }

  changeState(e, boundToTitleBar) {
    this.setState({input: e.target.value})
    if (boundToTitleBar) {
      const tb = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.tb-title');
      tb.innerText = `${tb.innerText.split(':')[0]}:${e.target.value}`;    
    }
  }

  render() {
    const { 
      label, accessCharPos, dataType,
      width, boundToTitleBar 
    } = this.props;
    
    return (
      <div className="input-elem">
        <div className={`${width} label-wrapper`}
          onClick={(e) => {
            this.inp.focus();
          }}
        > 
          { getLabel(label, accessCharPos) }:
        </div>
        <div className={`${width} input-wrapper`} >
          <input
            ref={node => this.inp = node}
            type={dataType}
            value={this.state.input}
            onChange={(e) => {
              this.changeState(e, boundToTitleBar);
            }}
          />
        </div> 
      </div>
    );
  }
}

export default Input;
