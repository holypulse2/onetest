import React from 'react';

import Desktop from "../../../assets/images/hero-image.png";
import Mobile from "../../../assets/images/mobile-header.png";
import Heading from "../../atoms/heading/Heading";
import Text from "../../atoms/text/Text";
import './Hero.scss';

const Hero = ({data}) => {   

  return (data &&
    <div className='container mx-auto h-full flex sm:flex-wrap 2xl:align-middle 2xl:items-center hero'>
        <div className='2xl:w-1/2 lg:w-1/2 md:w-1/2  sm:w-full text-left pt-12 pb-24 sm:pb-0 px-6 order-1 sm:order-last sm:mt-1 sm:px-2 sm:pt-6 sm:pb-10'>
        <div>
            <Heading> {data.object.heading} </Heading>
            <Text> {data.object.description} </Text>
            </div>
        </div>

        <div class=" sm:w-full lg:w-1/2 lg:py-6 md:w-1/2 text-center order-2 sm:order-1 sm:h-auto sm:pb-0 hero">
            {
                (window.innerWidth < 767) ? <img src={Mobile} alt={ 'hero-image' }/> : <img src={ Desktop } alt={ 'hero-image' } />
            }
        </div>
        
    </div>
  )
}

export default Hero;
