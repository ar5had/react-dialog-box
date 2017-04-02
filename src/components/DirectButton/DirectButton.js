import React, { Component } from 'react';

import Icon from '../Icon/Icon';
import arrow from '../../images/down-arrow.png'
import './DirectButton.css';

class DirectButton extends Component {
  getLabelValue(label, icon, dropdown) {
    return (
      <span className="label" >
        <Icon id={`${icon}-icon`} />    
        <span className="label-text">{label}</span>
        {
          dropdown ? <img className="dropdown-arrow" src={arrow} alt=">"/> : <span className="l-i"/>
        }
      </span>
    );
  }

  getDropdowns(dropdowns) {
    if(dropdowns) {
      return dropdowns.map(
        (elem, i) => 
          <div className="dropdown-item" key={i}>{ elem }</div>
      );
    }
  }

  render() {
    const config = this.props.config;
    return (
      <div tabIndex={this.props.tabIndex} className="direct-button" >
        { this.getLabelValue(config.label, config.icon, config.dropdown) }
        <div className="dropdown-items-wrapper">
          { this.getDropdowns(config.dropdown) }
        </div>
      </div>
    );
  }
}

export default DirectButton;
