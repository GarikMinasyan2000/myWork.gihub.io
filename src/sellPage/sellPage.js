import React from 'react'
import SellBackground from './sellBackground/sellBackground'
import Rate from '../homePage/rate/rate'
import BuyCalculator from '../buyPage/buyCalculator/buyCalculator'



const SellPage = () => {
    return(
        <>
            <SellBackground/>
            <Rate/>
            <BuyCalculator/>
        </>
    )
}

export default SellPage