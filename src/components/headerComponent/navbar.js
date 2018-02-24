import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import HomeIcon from '../../Assets/icons/home-icon.svg';

class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                <HomeIcon className="home-icon" width={45} height={45} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/blog' activeClassName='active'>
                <HomeIcon className="blog-icon" width={45} height={45} />
                <span>News</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/portfolio' activeClassName='active'>
                <HomeIcon className="portfolio-icon" width={45} height={45} />
                <span>Portfolio</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Router>
    )
  }
}

export default Navbar;
