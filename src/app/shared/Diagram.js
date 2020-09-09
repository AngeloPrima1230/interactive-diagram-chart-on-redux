import React, { Component } from 'react';
import Dialogue from './Dialogue';
import InteractiveDiagram from '../Diagram';

export class Diagram extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemName: this.props.itemName,
    }
  }
  
  render () {
    return (
      <>
        <InteractiveDiagram updateDiagram={this.props.editState}/>
        <Dialogue editState={this.props.editState}/>
      </>
    );
  }
}

export default Diagram;