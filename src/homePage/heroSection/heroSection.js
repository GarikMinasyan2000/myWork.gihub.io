import React from 'react';
import './heroSection.scss';
import logoPurple from '../../images/homePageImages/LogoPurple.png'
import '../../icons/style.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return(
        <div className=' align-items-nol-start  justify-content-nol-center  justify-content-lg-between   row container-fluid back'>
            <div className="first  order-sm-2 order-md-2 order-lg-1   text-nol-center  text-lg-start col-md-12  col-lg-7 col-xl-7 col-xxl-6">
               <div style={{display:'flex'}} className='heroLogo justify-content-nol-center   justify-content-lg-start ' >
                    <img className='col-md-6 logo' src={logoPurple} alt="cDram_logo" title='cDram_logo'/>
                    <h1  className='col-md-6  cryDram' title='CryptoDram'>CryptoDram</h1>
               </div> 
                <h1 className='text-sm-center  text-lg-start better'>better money</h1>
                <button><Link to='/#' className='links btnA'>Buy now</Link></button>
            </div>
            <div className=' second align-self-md-end order-sm-1  order-lg-2 
                col-md-12  col-lg-4 col-xl-4 col-xxl-5
                icon-Subtractihgyigu heroCDramIcon' title='Armenian_CryptoDram'>
            </div>
        </div>
    )
}

export default HeroSection