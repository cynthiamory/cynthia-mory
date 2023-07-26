//DESCRIPTION: Testimonials component for the testimonials section of the portfolio
//IMPORTS 
import React, { Component } from 'react';

class Testimonials extends Component {
   render() {
      // CHECK IF 'this.props.data' EXISTS
      if (this.props.data) {
         // MAP THROUGH THE 'testimonials' ARRAY IN 'this.props.data' AND CREATE AN ARRAY OF JSX ELEMENTS
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }
      // RENDER THE TESTIMONIALS SECTION
      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;
