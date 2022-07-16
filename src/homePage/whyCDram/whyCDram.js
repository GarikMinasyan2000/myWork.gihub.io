import React from 'react'
import './whyCDram.scss'
import logoPurple from '../../images/homePageImages/LogoPurple.png'
import '../../icons/style.css'

const WhyCDram = () => {
    return(
        <div className='sectionWhy'>
            <div className="titleWhy">
                <h1>Why</h1>
                <img src={logoPurple} alt="cDram_logo" />
                <h1>?</h1>
            </div>
            <div className="firstWhycard mediaWidth container-fluid row">
                <span>01</span>
                <div className='firstWhycard_1 col-sm-12 col-md-8'>
                    <h1 >It's profitable</h1>
                    <p>The cost of cDram will increase from 0.1 usdt to 500 usdt. The sooner you buy cDram, the more you earn</p>
                </div>
                <div className='icon-VariantsBuy firstWhycard_2 col-md-4'></div>
            </div>
            <div className="secondWhycard mediaWidth container-fluid row">
                <span>02</span>
                <div className='icon-VariantsCredit order-nol-2 order-md-1 secondWhycard_2 col-md-4'></div>
                <div className='secondWhycard_1 order-nol-1 order-md-2 col-sm-12 col-md-8'>
                    <h1 >Collateral lending</h1>
                    <p>By purchasing cDram you will get the opportunity to use the option of collateral lending - bail and get a loan of any cryptocurrencies</p>
                </div>
            </div>
            <div className="firstWhycard mediaWidth container-fluid row">
                <span>03</span>
                <div className='firstWhycard_1 col-sm-12 col-md-8'>
                    <h1 >Deposits at high interest</h1>
                    <p>By purchasing cDram, you will get the opportunity to use the deposit option - invest any cryptocurrency at a favorable interest rate</p>
                </div>
                <div className='icon-VariantsDeposit firstWhycard_2 col-md-4'></div>
            </div>
            <div className="secondWhycard mediaWidth container-fluid row">
                <span>04</span>
                <div className='icon-Variantsfeature order-nol-2 order-md-1 secondWhycard_2 col-md-4'></div>
                <div className='secondWhycard_1  order-nol-1 order-md-2 col-sm-12 col-md-8'>
                    <h1 >This is the future</h1>
                    <p>cDram - global monetary and financial infrastructure. Be a part of it now!   </p>
                </div>
            </div>
        </div>
    )
}


export default WhyCDram