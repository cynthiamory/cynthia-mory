//IMPORT REACT LIBRARIES
import React, { Component } from 'react';

class Footer extends Component {
  render() {

    //CHECK IF 'this.props.data' EXISTS BEFORE USING IT
    if (this.props.data) {
      //MAP THROUGH THE 'SOCIAL' ARRAY IN 'this.props.data' AND CREATE AN ARRAY OF JSX ELEMENTS
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      // FOOTER SECTION
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul>
              <li>Modified & Revamped By Cynthia Mory ♥️</li>
            </ul>

            <ul className="copyright">
              <li>&copy; Template Inspired and Credited to Tim Baker - Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
