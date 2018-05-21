
import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="contain">
                <div className="f1">
            <div className="t1">
                <h3>A BRIEF SUMMARY</h3>
                <hr />
                <p>
                From web design and development right through to Search Engine Optimization and online marketing solutions.
                 We can handle projects of any scale. We look forward to hearing from you and bringing your project to life.
                </p>
            </div>
                </div>
                <div className="f2">
            <div className="t2">
                <h3>SOCIALS</h3>
                <hr />
                    <div className="social">
                    <div className="s1"></div>
                    <div className="s2"></div>
                    <div className="s3"></div>
                    <div className="s4"></div>
                    <div className="s5"></div>
                    <div className="s6"></div>                    
                    </div>
            </div>
                </div>
                <div className="f3">
            <div className="t3">
                <h3>LOCATIONS</h3>
                <hr />
                <p>5555 Niagara Ave, </p>
                <p>San Diego, CA 95555</p>  
                <p>(555) 555 5600</p>
                
            </div>
                </div>
                </div>
                <div className="copy"><p>&copy; Copyright - WWWpros</p></div>
            </div>
        );
    }
}

export default Footer;