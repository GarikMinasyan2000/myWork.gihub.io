import React from 'react'
import Rate from '../homePage/rate/rate'
import BackgroundSection from './buyBackground/buyBackground'
import BuyCalculator from './buyCalculator/buyCalculator'
import './buyPage.scss'
import Packages from './packages/packages'


const BuyPage = () => {
    return(
        <>
            <BackgroundSection/>
            <Rate />
            <Packages/>
            <BuyCalculator/>
        </>

    )
}


export default BuyPage