
import React, { Component } from 'react';
import pic1 from './html.png'
import pic2 from './world.png'
import './Service.css' ;


class Service extends Component {
    render() {
        return (
            <div className="service">
                    <div className=".grid-container">
                <div className="grid-item">
                    <h3 className="text-head">Services</h3>
                </div>
                <div className="aa">
                    <h3 className="p1">Brand up your product/services Globaly</h3>
                    <img className="pic1" src={pic1} alt="html" /> 
                </div>
                <div className="aaa">
                    <h3 className="p2">Scrape and Redesign your old website</h3>
                    <img className="pic2" src={pic2} alt="world" />
                </div>
                
                     </div>
            </div>
        );
    }
}

export default Service;