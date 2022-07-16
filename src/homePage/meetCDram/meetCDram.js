import React from 'react';
import './meetCDram.scss'
import logoPurple from '../../images/homePageImages/LogoPurple.png'

const Meet = () => {
    return(
        <div className='meet '>
            <div className='flex'>
                <span>Meet</span>
                <img className='logo' src={logoPurple} alt="cDram_logo" />
            </div>
            <p className='meetParagraph '>cDram is intended to be the next step in the evolution of the national currency of Armenia - dram cDram has positive properties of both fiat currencies and cryptocurrencies</p>
                <div className=" cardsFrame  container-fluid row justify-content-nol-center  px-xl-0   ">
                    <div className=" cards my-nol-2 mx-nol-2 col-sm-12 col-md-6  col-xl-4">
                        <div className='icon-Variantslimited meetIcon'></div>
                        <p className="cardName">Limited</p>
                        <p className='cardTitle'>cDram is released in limited quantities. Maximum number of coins: 2.100.000. This limited supply allows cDram to resist inflation</p>
                    </div>
                    <div className=" cards my-nol-2 mx-nol-2 col-sm-12 col-md-6  col-xl-4">
                        <div className="icon-VariantsStable meetIcon"></div>
                        <p className="cardName">Stable</p>
                        <p className='cardTitle'>cDram exchange rate is stable and is not subject to inflation. The rate is pegged to the most stablecoin - usdt.</p>
                    </div>
                    <div className=" cards my-nol-2 mx-nol-2 col-sm-12 col-md-6  col-xl-4">
                        <div className="icon-VariantsBacked meetIcon"></div>
                        <p className="cardName">Backed</p>
                        <p className='cardTitle'>Each issued coin is fully backed by the real asset reserve. The reliability of the cDram is guaranteed.</p>
                    </div>
                    <div className=" cards my-nol-2 mx-nol-2 col-sm-12 col-md-6  col-xl-4">
                        <div className="icon-VariantsSecurity meetIcon"></div>
                        <p className="cardName">Security</p>
                        <p className='cardTitle'>High level of security based on decentralized architecture, hashing, 2nd phase authentication, consensus algorithms and cryptographic functions</p>
                    </div>
                </div>
        </div>
    )
}

export default Meet