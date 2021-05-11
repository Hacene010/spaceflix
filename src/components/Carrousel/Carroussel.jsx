import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SCarrousel from './Style';

const properties = {
  duration: 3500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrow: true,
};

function Carrousel() {
  return (
    <SCarrousel className='container'>
      <Slide {...properties}>
        <div className='slide'>
          <img src='/img/carrousel/gravity.jpg' alt='img1' />
        </div>

        <div className='slide'>
          <div>
            <img src='/img/carrousel/mars_touch_down.jpg' alt='img2' />
          </div>
        </div>

        <div className='slide'>
          <div>
            <img src='/img/carrousel/mission_to_mars.jpg' alt='img3' />
          </div>
        </div>

        <div className='slide'>
          <div>
            <img src='/img/carrousel/mars_mission1.jpg' alt='img4' />
          </div>
        </div>
        <div className='slide'>
          <div>
            <img src='/img/carrousel/the_martian.jpg' alt='img5' />
          </div>
        </div>
      </Slide>
    </SCarrousel>
  );
}
export default Carrousel;
