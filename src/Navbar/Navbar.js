import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey">
            <a href="./index.html" className="brand-logo">Developers Rising</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="https://www.meetup.com/DevelopersRising/">Events</a></li>
              <li><a href="./friends.html">Team</a></li>
              <li><a href="./members.html">Members</a></li>
              <li><a href="./legal.html">Legal</a></li>
            </ul>
          </div>
        </nav>
      </div>


    );
  }
}

export default Navbar;