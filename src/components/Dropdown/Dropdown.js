import React, { Component } from 'react';

import './Dropdown.css';

import { getLabelWithAccessCode as getLabel } from '../../utils/getLabelWithAccessCode';
import { DIVIDER } from '../../constants/dialogBoxConstants';

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
        (elem, i) =>  {
          if(elem === DIVIDER) {
            return <div className="dropdown-item divider" key={i} />
          } else if (elem[0] === '!') {
            return <div className="dropdown-item disabled" key={i}>{elem.slice(1)}</div>
          } else {
            return <div className="dropdown-item" key={i}>{elem}</div>
          }
        }
      );
    }
  }

  render() {
    const config = this.props.config;
    return (
      <div className="dropdown" tabIndex={this.props.tabIndex}>
        { getLabel(config.label, config.accessCharPos) }
        <div className="dropdown-items-wrapper">
          { this.getDropdowns(config.dropdown) }
        </div>
      </div>
    );
  }
}

export default Dropdown;
