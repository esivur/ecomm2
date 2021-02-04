import lovers from '../Images/lovers.png';
import jbf from '../Images/jbf.png';
import ana from '../Images/assuka.png';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { render } from '@testing-library/react';

const Slideshow = () => {
    return (
      <div>
        <div class="hero_text_container">
  
  <p class="hero_text"> The Real Fun Happens AfterDark</p>
  <a class="button_text" href="/ProductsPage"> <button class="button_text"> Impulse Buy </button> </a>
</div>
      <div className="slide-container">
      <Slide>
          <div style={{ height: "70vh", }} className="each-slide">
            <span>
          
            </span>
              {" "}
              <div className="slide-image" style={{ backgroundImage: `url(${lovers})`, }} >
                  
            </div>
          </div>
          <div
              style={{ height: "70vh", }} className="each-slide">
              {" "}
              <div className="slide-image" style={{ backgroundImage: `url(${jbf})`, }} >
                 
          </div>
          </div>
          <div style={{ height: "70vh", }} className="each-slide">
              <div className="slide-image" style={{ backgroundImage: `url(${ana})`, }} >    
              </div>
          </div>
      </Slide>
  </div>
</div>
    )
}



export default Slideshow;
