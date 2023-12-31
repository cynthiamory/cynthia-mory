//Import React and Component
// DESCRIPTION: This is the Header component. It is the first thing that will be rendered when the user visits the website. It will display the name, occupation, and description of the user. It will also display the social media links of the user.
import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import particles from '../Const/particle';

//HEADER COMPONENT CLASS DECLARATION AND EXPORT
class Header extends Component {
   render() {
      // CHECK IF 'this.props.data' EXISTS
      if (this.props.data) {
         // STORE 'name' FROM THE DATA
         var name = this.props.data.name;
         // STORE 'occupation' FROM THE DATA
         var occupation = this.props.data.occupation;
         // STORE 'description' FROM THE DATA
         var description = this.props.data.description;
         // STORE 'city' FROM THE DATA
         var city = this.props.data.address.city;
         // MAP THROUGH THE 'social' ARRAY IN 'this.props.data' AND CREATE AN ARRAY OF JSX ELEMENTS
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      //RENDER THE HEADER SECTION
      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {name}.</h1>
                  <h3>A {city}, Canada based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  {/* <row className="social">
                  <ul>
                  {networks}
                  </ul>
               </row> */}
               </div>
               <div className="particle">
                  <Particles
                     params={particles}
                     className="particles"
                  />
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
