import React, { Component } from 'react';
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
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOuterClick, false);
      this.setState({width: "250px"});
    } else {
        document.removeEventListener('click', this.handleOuterClick, false);
        this.setState({width: "0px"});
      }

      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
  }

  handleOuterClick(e) {
    this.handleClick();
  }

  render() {
    return (
      <div>
        <div className="sidenav" style={ { width: `${ this.state.width }` } }>
          <a href="#" className="close-btn">&times;</a>
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">Portfolio</a>
        </div>
        <span className="hamburger-btn" onClick={this.handleClick}>&#9776;</span>
      </div>
    )
  }
}

export default Nav;
