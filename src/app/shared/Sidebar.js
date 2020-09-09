import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class Sidebar extends Component {
  state = { varShow: false, paraShow: false };

  componentDidUpdate() {
  }

  onRouteChanged() {
  }

  emitItemState(itemName, isNew) {
    const body = {
      itemName,
      isNew,
    }
    this.props.changeEditState(body);
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper align-items-center">
        <a className="sidebar-brand brand-logo" href="/diagram"><img src={require("../../assets/images/logo.svg")} alt="logo" /></a>
        <a className="sidebar-brand brand-logo-mini pt-3" href="/diagram"><img src={require("../../assets/images/logo-mini.svg" )} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className='nav-item'>
            <Dropdown drop="right" className="nav-link"
            show={this.state.varShow}
            onMouseEnter={()=> this.setState({varShow:true})} 
            onMouseLeave={() => this.setState({varShow:false})}
            >
            <i className="mdi mdi-cube icon-md mr-3"></i>
            <span className="menu-title">Variables</span>
            <Dropdown.Toggle variant="nav-link" ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => this.emitItemState('variable', true)}><i className="mdi mdi-access-point icon-md mr-3"></i>New</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item><i className="mdi mdi-account-alert icon-md mr-3"></i>Email</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          
          <li className='nav-item'>
            <Dropdown drop="right" className="nav-link"
            show={this.state.paraShow}
            onMouseEnter={()=> this.setState({paraShow:true})} 
            onMouseLeave={() => this.setState({paraShow:false})}
            >
            <i className="mdi mdi-iframe-variable-outline icon-md mr-3"></i>
            <span className="menu-title">Parameters</span>
            <Dropdown.Toggle variant="nav-link" ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => this.emitItemState('parameter', true)}><i className="mdi mdi-access-point icon-md mr-3"></i>New</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item><i className="mdi mdi-account-alert icon-md mr-3"></i>Email</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className='nav-item'>
            <div className="nav-link" onClick={(e) => this.emitItemState('modals', false)}>
              <i className="mdi mdi-sitemap icon-md mr-3"></i>
              <span className="menu-title">Models</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className="nav-link">
              <i className="fa fa-table icon-md mr-3"></i>
              <span className="menu-title">Schemas</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className="nav-link">
              <i className="mdi mdi-marker-check icon-md mr-3"></i>
              <span className="menu-title">Results</span>
            </div>
          </li>
          <div className="dropdown-divider" role="separator"></div>

          <li className='nav-item'>
            <div className="nav-link" onClick={(e) => this.emitItemState('connect', true)}>
              <i className="mdi mdi-lan-connect icon-md mr-3"></i>
              <span className="menu-title">Connectors</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className="nav-link" onClick={(e) => this.emitItemState('tasks', true)}>
              <i className="mdi mdi-clipboard-outline icon-md mr-3"></i>
              <span className="menu-title">Tasks</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className="nav-link">
              <i className="mdi mdi-wrench icon-md mr-3"></i>
              <span className="menu-title">Tools</span>
            </div>
          </li>
          <div className="dropdown-divider" role="separator"></div>

        </ul>
      </nav>
    );
  }

}

export default Sidebar;