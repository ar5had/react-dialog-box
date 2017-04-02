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
  render() {
    const config = this.props.config;
    return (
      <div className="dropdown">
        { getLabel(config.label, config.accessCharPos) }
      </div>
    );
  }
}

export default Dropdown;
