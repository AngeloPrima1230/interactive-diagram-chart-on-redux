import React, { Component } from 'react';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () { 
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt =>evt.preventDefault()}><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
          <i className="mdi mdi-menu"></i>
        </button>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
          <span className="mdi mdi-menu"></span>
        </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
