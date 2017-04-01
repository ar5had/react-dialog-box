import React, { Component } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import './DropdownMenu.css';

class DropdownMenu extends Component {
  getDropdowns() {
    return this.props.config.map((elem, i) => <Dropdown config={elem} key={i}/>);
  }

  render() {
    return (
      <div className="dropdown-menu">
        {this.getDropdowns()}
      </div>
    );
  }
}

export default DropdownMenu;
