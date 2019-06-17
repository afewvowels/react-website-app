import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './Hero.css';

import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import hero1 from '../img/coffee-1.jpg';
import hero2 from '../img/coffee-2.jpg';
import hero3 from '../img/coffee-3.jpg';


export default class Hero extends Component {
  render() {
    return (
      <CarouselProvider
        className='slider-wrapper'
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        isPlaying={true}
      >
        <Slider className='slider'>
          <Slide index={0} className='slide'>
            <Image
              src={hero1}
              hasMasterSpinner={false}
              isBgImage={true}
              tag='div'
              className='slider-image'
            ></Image>
          </Slide>
          <Slide index={1} className='slide'>
            <Image
              src={hero2}
              isBgImage={true}
              tag='div'
              className='slider-image slide-image-bottom-anchor'
            ></Image>
          </Slide>
          <Slide index={2} className='slide'>
            <Image
              src={hero3}
              isBgImage={true}
              tag='div'
              className='slider-image slide-image-bottom-anchor'
            ></Image>
          </Slide>
        </Slider>
      </CarouselProvider>
    )
  }
}
