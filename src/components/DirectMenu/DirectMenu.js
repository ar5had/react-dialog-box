import React, { Component } from 'react';

import DirectButton from '../DirectButton/DirectButton';
import './DirectMenu.css';

class DirectMenu extends Component {
  getDirectButtons() {
    return this.props.config.map((elem, i) => <DirectButton config={elem} key={i} tabIndex={i} />);
  }

  render() {
    return (
      <div className="direct-menu">
        {this.getDirectButtons()}
      </div>
    );
  }
}

export default DirectMenu;
