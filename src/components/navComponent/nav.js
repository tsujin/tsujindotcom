import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="sidenav" style={this.props.style}>
            <button className="close-btn">&times;</button>
            <div className="nav-menu-wrap">
              <div className="nav-menu">
                <NavLink className="navlink" exact to='/'>
                  <i className="far fa-address-card"></i>
                  <span>About</span>
                </NavLink>
                <NavLink className="navlink" exact to='/News'>
                  <i className="far fa-newspaper"></i>
                  <span>News</span>
                </NavLink>
                <NavLink className="navlink" exact to='/Portfolio'>
                  <i className="far fa-folder-open"></i>
                  <span>Portfolio</span>
                </NavLink>
              </div>
            </div>
            <div className="social-bar">
              <a href="https://www.linkedin.com/in/tsujin">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/justin.horn.904/">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://github.com/tsujin">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <span className="hamburger-btn" onClick={this.props.onClick}><i className="fas fa-bars"></i></span>
        </div>
      </Router>
    )
  }
}

export default Nav;
