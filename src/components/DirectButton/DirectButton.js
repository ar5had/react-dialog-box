import React, { Component } from 'react';

import Icon from '../Icon/Icon';
import arrow from '../../images/down-arrow.png'
import './DirectButton.css';

class DirectButton extends Component {
  getLabelValue(label, icon, dropdown) {
    return (
      <span className="label">
        <Icon id={`${icon}-icon`} />    
        {label}
        {
          dropdown ? <img className="dropdown-arrow" src={arrow} alt=">"/> : ''
        }
      </span>
    );
  }
  render() {
    const config = this.props.config;
    return (
      <div className="direct-button">
        { this.getLabelValue(config.label, config.icon, config.dropdown) }
      </div>
    );
  }
}

export default DirectButton;
