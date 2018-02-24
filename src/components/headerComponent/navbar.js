import React, { Component } from 'react';
import HomeIcon from '../../Assets/icons/home-icon.svg';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="home">
            <a href="#">
              <HomeIcon className="home-icon" width={45} height={45} />
              <span>Home</span>
            </a>
          </li>
          <li className="blog">
            <a href="#">
              <HomeIcon className="blog-icon" width={45} height={45} />
              <span>News</span>
            </a>
          </li>
          <li className="portfolio">
            <a href="#">
              <HomeIcon className="portfolio-icon" width={45} height={45} />
              <span>Portfolio</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
