import React, { Component } from 'react';
import './App.scss';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
// import Footer from './shared/Footer';
import Diagram from './shared/Diagram';
// import Basic from './form-elements/BasicElements';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemEditState:{
        itemName: 'variable',
        isNew: false,
      }
    }
    this.changeItemState = this.changeItemState.bind(this);
  }

  changeItemState(obj) {
    this.setState({itemEditState: obj});
  }

  render () {
    return (
      <div className="container-scroller">
        <Navbar/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar changeEditState={this.changeItemState}/>
          <div className="main-panel">
            {/*<Basic/>*/}
            <Diagram editState={this.state.itemEditState}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    
  }

}

export default App;
