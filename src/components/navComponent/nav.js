import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      width: "0px",
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOuterClick = this.handleOuterClick.bind(this);
  }

  handleClick() {
    // when the nav is open, we will add a listener for clicks anywhere on the page
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOuterClick, false);
      this.setState({width: "250px"});
    } else {
        document.removeEventListener('click', this.handleOuterClick, false);
        this.setState({width: "0px"});
      }
      // toggle state of the navbar
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
  }

  // handles clicks outside of our component
  handleOuterClick(e) {
    this.handleClick();
  }

  render() {
    return (
      <Router>
        <div>
          <div className="sidenav" style={ { width: `${ this.state.width }` } }>
            <button className="close-btn">&times;</button>
            <NavLink exact to='/'>About</NavLink>
            <NavLink exact to='/News'>News</NavLink>
            <NavLink exact to='/Portfolio'>Portfolio</NavLink>
          </div>
          <span className="hamburger-btn" onClick={this.handleClick}>&#9776;</span>
        </div>
      </Router>
    )
  }
}

export default Nav;
