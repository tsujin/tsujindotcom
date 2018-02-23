import React, {Component} from 'react';
import Navbar from './navbar';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,
    }

    this.handleScroll = () => {
      if (window.scrollY >= 50) {
        this.setState({ opacity: .25 });
      }
      else {
        this.setState({ opacity: 1 });
      }
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <header style={{ opacity: this.state.opacity }}>
        <input id="hamburger-state" class="hamburger-state" name="hamburger-state" type="checkbox"/>
        <label class="hamburger-button" for="hamburger-state">
          <span></span>
        </label>
        <Navbar/>
      </header>
    )
  }
}

export default Header;
