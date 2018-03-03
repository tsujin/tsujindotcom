import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      transform: "-100",
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOuterClick = this.handleOuterClick.bind(this);
  }

  handleClick() {
    // when the nav is open, we will add a listener for clicks anywhere on the page
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOuterClick, false);
      this.setState({transform: "0"});
    } else {
        document.removeEventListener('click', this.handleOuterClick, false);
        this.setState({transform: "-100"});
      }
      // toggle state of the navbar
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
      console.log(this.state.transform)
  }

  // handles clicks outside of our component
  handleOuterClick(e) {
    this.handleClick();
  }

  render() {
    return (
      <Router>
        <div>
          <div className="sidenav" style={ { transform: `translate(${ this.state.transform }%, 0%)` } }>
            <button className="close-btn">&times;</button>
            <div className="nav-menu-wrap">
              <div className="nav-menu">
                <NavLink className="navlink" exact to='/'>
                  <i class="far fa-address-card"></i>
                  <span>About</span>
                </NavLink>
                <NavLink className="navlink" exact to='/News'>
                  <i class="far fa-newspaper"></i>
                  <span>News</span>
                </NavLink>
                <NavLink className="navlink" exact to='/Portfolio'>
                  <i class="far fa-folder-open"></i>
                  <span>Portfolio</span>
                </NavLink>
              </div>
            </div>
            <div className="social-bar">
              <a href="https://www.linkedin.com/in/tsujin">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/justin.horn.904/">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://github.com/tsujin">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <span className="hamburger-btn" onClick={this.handleClick}><i class="fas fa-bars"></i></span>
        </div>
      </Router>
    )
  }
}

export default Nav;
