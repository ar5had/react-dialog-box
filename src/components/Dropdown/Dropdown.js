import React, { Component } from 'react';

import './Dropdown.css';

import { getLabelWithAccessCode as getLabel } from '../../utils/getLabelWithAccessCode';

class Dropdown extends Component {
  getLabel(label, pos) {
    const accessChar = <span className="access-key">{label[pos]}</span>;
    return (
      <span className="label">
        {label.slice(0, pos)}{accessChar}{label.slice(pos + 1)}
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
      <div className="dropdown">
        { getLabel(config.label, config.accessCharPos) }
        <div className="dropdown-items-wrapper">
          { this.getDropdowns(config.dropdown) }
        </div>
      </div>
    );
  }
}

export default Dropdown;
