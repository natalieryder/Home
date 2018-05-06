
import React, { Component } from 'react';
import pic1 from './html.png'
import pic2 from './world.png'


class Service extends Component {
    render() {
        return (
            <div>
                    <div className=".grid-containet">
                <div className="grid-item">
                    <h3>Services</h3>
                </div>
                <div className="grid-item">
                    <p>Brand up your product/services Globaly</p>
                    <img src={pic1} alt="html" /> 
                </div>
                <div className="grid-item">
                    <p>Scrape and redesign your old website</p>
                    <img src={pic2} alt="world" />
                </div>
                
                     </div>
            </div>
        );
    }
}

export default Service;