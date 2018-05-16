
import React, { Component } from 'react';
import Typist from 'react-typist';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                 <div className="grid-item">
                    <h3 className="text-head">Portfolio</h3>
                </div>
                <div className="feutured">
                <Typist 
                cursor={{ hideWhenDone: true }}
                avgTypingSpeed={30}
                startDelay={1000}
              
                > 
                <h1>FEATURED PROJECTS<span className="typed-cursor"></span></h1>
                <Typist.Delay ms={500} />

                <p>Unlike other web design companies, not one of our client’s websites look the same,
                        they are all designed in their own unique and creative way.</p>
                </Typist>
               </div>
              <div className="mockup">
              <div className="mock1"></div>
              <div className="mock2"></div>
              <div className="mock3"></div>
              <div className="mock4"></div>
              <div className="mock5"></div>
              <div className="mock6"></div>
              </div>
     
            </div>
        );
    }
}

export default Portfolio;