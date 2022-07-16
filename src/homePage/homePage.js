import React from 'react';
import HeroSection from './heroSection/heroSection';
import Meet from './meetCDram/meetCDram';
import WhyCDram from './whyCDram/whyCDram'
import Rate from './rate/rate';

const HomePage = () => {
    return(
        <>
            <HeroSection/>
            <Meet/>
            <WhyCDram/>
            <Rate/>
        </>
    )
}

export default HomePage