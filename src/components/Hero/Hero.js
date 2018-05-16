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
  <div className="abc">
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
      blur={{ min: -2 , max: 3 }}
      bgImage={require('../../img/bg10.jpg')}
      bgImageAlt="back-2"
      strength={200}
      
      
    >
    <div className="copywriting">
    <div className="intro">
      <img className="logo1" src={logo} alt="logi" /> 
      <h2 className="we">WORLD WIDE WEB PROS</h2>
    </div>
    <div className="matn">
      <p className="para1">You need coolest website with highest functionality</p>
      <p className="para2">We Provide what you desigre</p>
      <button className="btn btn-primary">Let's Take a Tour</button>
      </div>
      </div>
      <div style={{ height: '240px' }} />
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