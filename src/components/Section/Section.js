
import React, { Component } from 'react';
import './Section.css'

class Section extends Component {
    render() {
        return (
            <div grid-container>
                <div className="grid-item">
                    <h1 href="#">Services</h1>
                </div>
                <div className="grid-item">
                    <h1>Our Strategy</h1>
                </div>
                <div className="grid-item">
                   <h1>Portfolio</h1> 
                </div>
                <div className="grid-item">
                    <h1>Contact Us</h1>
                </div>
            </div>
        );
    }
}

export default Section;