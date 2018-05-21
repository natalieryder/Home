// import React from 'react';
// import { Jumbotron, Container } from 'reactstrap';
// import hero from '../../b8.jpg';
 import './Hero.css';
import logo from '../../img/1111.png';
// const Hero = (props) => {
//   return (
//     <div className="hero">
//       <img src={hero} alt="hero" /> 
//       <div className="hero-text">
//       <h2 className="text-border">WE ARE WEB PROS</h2>
//       <h3 className="text-bg">We Provide What You Desigre</h3>
// </div>
    
  
//     </div>
//   );
// };

// export default Hero;



import React from 'react';
import { Parallax, Background } from 'react-parallax';


const MyComponent = () => (
  <div className="abc" id="hero">
  
    {/* <Parallax
      blur={2}
      bgImage={require('../../img/b1.jpg')}
      bgImageAlt="back-1"
      strength={100}
      
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '700px' }} />
    </Parallax> */}
    <Parallax
      blur={{ min: -1 , max: 3 }}
      bgImage={require('../../img/back3.jpg')}
      bgOpacity={0.8}
      bgImageAlt="back-2"
      strength={200}
      
      
    >
    <div className="copywriting">
    <div className="intro">
      {/* <img className="logo1" src={logo} alt="logi" />  */}
      <h3 className="agency">WEB DESIGN AGENCY</h3>
      <hr className="hr1" />
      <h2 className="we">WORLD WIDE WEB PROS</h2>
    </div>
    <div className="matn">
      <p className="para1">You need coolest website with highest functionality
      <br />
      We Provide what you desigre</p>
      <button className="btn btn-primary">Let's Take a Tour</button>
      </div>
      </div>
      <div style={{ height: '270px' }} />
    </Parallax>
    {/* <Parallax 
      // blur={{ min: -1 , max: 1 }}
      bgImage={require('../../img/bg4.jpg')}
      bgImageAlt="back-2"
      strength={400}
    >
      <div classname="secondimage">
        
      </div>
      <div style={{ height: '400px' } } />
    </Parallax> */}
    
  </div>
);
export default MyComponent;