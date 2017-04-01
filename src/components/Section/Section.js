import React, { Component } from 'react';

import './Section.css';

import 
{ 
  TABS_TEXTAREA, INPUT, INPUT_DT, SELECT_BOX
} 
from '../../constants/dialogBoxConstants';

import Input from '../Input/Input';
import InputDT from '../InputDT/InputDT';
import SelectBox from '../SelectBox/SelectBox';
import TabTextarea from '../TabTextarea/TabTextarea';

class Section extends Component {
  getSection() {
    const sectionItems = this.props.config;
    return sectionItems.map((elem, key) => this.getSectionItem(elem, key) )
  }

  getSectionItem(elem, key) {
    switch (elem.type) {
      case INPUT:
        return <Input key={key} {...elem} />
      case INPUT_DT:
        
        break;
      case SELECT_BOX:
        
        break;
      case TABS_TEXTAREA:
        
        break;
      default:
        console.error('SECTION ITEM not found!');
        break;
    }
  }

  render() {
    return (
      <div className="section">
        {this.getSection()}
      </div>
    );
  }
}

export default Section;
