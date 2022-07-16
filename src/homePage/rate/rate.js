import React from 'react';
import './rate.scss'
import '../../icons/style.css'
import LineChart from './chart/chart';
import { Link, useLocation } from 'react-router-dom';

const Rate = (props) => {
    const location = useLocation()

    return (
        <div  className={location.pathname === '/' ? 'sectionRate backColorRate' : ' sectionRate backColorRateInBuy'}>
            <h1>Rate</h1>
            <div className="rateTransfer">
                <h1>1</h1>
                <div className="icon-Subtractihgyigu rateCDramIcon"></div>
                <h1 style={{color:'rgba(128, 0, 128, 1) '}}>cDram =  <span style={{color:'black'}}> 0.1</span></h1>
                <div className="icon-ic_ustdihgyigu rateUSTDIcon"></div>
                <h1>USDT</h1>
            </div>
            <p className='rateParagraph'>The rate of 1 cDram is initially equal to <span className='bold'>0.1 USDT,</span>  but with the number of cDrams purchased, the rate will rise and reach 500 usdt when all 
                2,100,000 coins are purchased. At level <span className='bold'>1 cDram = 500 USDT,</span> the exchange rate will stabilize and will not change any more. Rate changes from 1
                cDram = 0.1 USDT to 1 cDram = 500 usdt will take place in increments of 0.1% and in general will change 1000 
                times over the entire period.</p>
            <p className='courseRatingTitle'>Course and number of purchased cDram now:</p>
            <LineChart/>
            <div className={location.pathname === '/' ? "rateBtn" : "rateBtn none"}>
                <Link to="#" className={location.pathname === '/' ? "links btn" : "links btn none"}>Buy now</Link>
            </div>
        </div>
    )
}


export default Rate

