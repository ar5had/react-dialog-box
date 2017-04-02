import React, { Component } from 'react';

import './TabTextarea.css';

import { getLabelWithAccessCode as getLabel } from '../../utils/getLabelWithAccessCode';

class TabTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTA: 0,
      textareas: this.props.config.map(elem => `Here goes the content of ${elem.label} Tab.`)
    };
    this.tabs = [];
  }

  handleTabs(i) {
    this.tabs.forEach(e => e.classList.remove('active'));
    this.tabs[i].classList.add('active');
    this.setState({activeTA: i});
  }

  getAllLabels(config) {
    return config.map((elem, i) => {
      const { label, accessCharPos } = elem;
      return (
        <div
          data-tab={i}
          key={i}
          className={`ta-label-wrapper ${this.state.activeTA === i ? 'active' : ''}`}
          ref={node => this.tabs[i] = node}
          onClick={this.handleTabs.bind(this, i)}
        >
          { getLabel(label, accessCharPos) }:
        </div>
      );
    });

  }

  render() {
    const { width, config } = this.props;
    const activeTA = this.state.activeTA;
    return (
      <div className={`tab-textarea-elem ${width}`} >
        <div className={`${width} tab-textarea-all-labels-wrapper`} > 
          { this.getAllLabels(config) }
        </div>
        <div className={`${width} textarea-wrapper`} >
          <textarea 
            value={this.state.textareas[activeTA]}
            onChange={(e) => {
              const newState = this.state.textareas.slice(0);
              newState[activeTA] = e.target.value;
              this.setState({
                textareas: newState
              });
            }}
          />
        </div> 
      </div>
    );
  }
}

export default TabTextarea;
