import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer grey">
      <div className="container">
        <div className="row">
          <div id="about" className="col l6 s12">
            <h5 className="white-text">About</h5>
            <p className="black-text">This is a non-profit organization.</p>
            <br/>
            <h6 className="white-text">Organized by: </h6>
            <ul>
              <li>
                <div className="row valign-wrapper">
                  <div className="col s2">
                    <a href="http://www.createdd.com/">
                    <img src="https://avatars3.githubusercontent.com/u/22077628?v=3&s=460" alt="Avatar of Daniel Deutsch" className="circle responsive-img" />
                  </a>
                  </div>
                  <div className="col s10">
                    <span className="black-text">
                  Daniel Deutsch (founder and organizer) - Aspiring Web Developer with Business Law Background. Pushing the limits to make the world a better place.
                </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="row valign-wrapper">
                  <div className="col s2">
                    <a href="http://rob.ee/">
                    <img src="https://avatars3.githubusercontent.com/u/13132899?v=3&s=460" alt="Avatar of Robert Axelsen" className="circle responsive-img"/>
                  </a>
                  </div>
                  <div className="col s10">
                    <span className="black-text">
                  Robert Axelsen (founder and organizer) - Software Developer and Public Speaker, passionate about Open Source, Community and Education. Life-long learner.
  
                </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Other platforms</h5>
            <ul>
              <li><a href="http://developersrising.org/" className="grey-text text-darken-4"><i className="fa fa-globe"></i> developersrising.org</a></li>
              <li><a href="https://www.meetup.com/DevelopersRising/" className="grey-text text-darken-4"><i className="fa fa-car"></i> Meetup.com</a></li>
              <li><a href="https://github.com/DevelopersRising/DevelopersRising" className="grey-text text-darken-4"><i className="fa fa-github"></i> Github</a></li>
              <li><a href="https://www.facebook.com/Developers-Rising-273886056453052/" className="grey-text text-darken-4"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a href="https://twitter.com/DevsRising" className="grey-text text-darken-4"><i className="fa fa-twitter"></i> Twitter</a></li>
              <li><a href="https://www.instagram.com/developers_rising/" className="grey-text text-darken-4"><i className="fa fa-instagram"></i> Instagram</a></li>
              <li><a href="https://medium.com/developersrising" className="grey-text text-darken-4"><i className="fa fa-medium"></i> Medium</a></li>
            </ul>
            <h5 className="white-text">Contact</h5>
            <h6 className="grey-text text-darken-4">devsrising@gmail.com</h6>
            <h5 className="white-text">Photo credit</h5>
            <a href="https://unsplash.com/@usinglight" className="grey-text text-darken-4">    Photo by Stefan Steinbauer on Unsplash</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          <p className="white-text">© 2017 Copyright FCCVienna.</p>
          <a href="http://www.createdd.com/" className="grey-text text-darken-4">Build by Daniel Deutsch</a>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;