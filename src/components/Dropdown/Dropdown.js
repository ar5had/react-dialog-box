import React, { Component } from 'react';

import './Dropdown.css';

class Dropdown extends Component {
  getLabelValue(label, pos) {
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
        { this.getLabelValue(config.label, config.accessCharPos) }
      </div>
    );
  }
}

export default Dropdown;
