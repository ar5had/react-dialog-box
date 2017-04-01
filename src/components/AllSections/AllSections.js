import React, { Component } from 'react';

import Section from '../Section/Section';
import './AllSections.css';

class AllSections extends Component {
  getAllSections() {
    const config = this.props.config;
    return config.map((elem, i) => <Section config={elem.items} key={i} />);
  }

  render() {
    return (
      <div className="all-sections">
        {this.getAllSections()}
      </div>
    );
  }
}

export default AllSections;
