import React from 'react';
import './footer.scss'
import logoWhite from '../../images/LogoWhite.png'
import {FaInstagram , FaYoutube } from 'react-icons/fa'
import {ImFacebook } from 'react-icons/im'
import { Link } from 'react-router-dom';

const Footer = (props) => {
    const scroll = () => {
        props.scrollUp()
    }
    return(
        <div className='footer'>
            <div className='row container-fluid'>
                <div className='col-md-12 col-lg-8 my-md-2   col-xl-8 container-fluid row footerMenuSection'>
                    <div className='order-nol-1  order-md-1 col-nol-6 col-md-4 col-xl-4'>
                        <Link onClick={scroll} className='links display-block' to='/buy'>Buy</Link>
                        <Link onClick={scroll} className='links display-block' to='/sell'>Sell</Link>
                        <Link onClick={scroll} className='links display-block' to='/deposite'>Deposite</Link>
                        <Link onClick={scroll} className='links display-block' to='/credit'>Credit</Link>
                        <Link onClick={scroll} className='links display-block' to='/transfer'>Transfer</Link>
                    </div>
                    <div className='order-nol-3 order-md-2 my-sm-3 my-md-0 col-nol-12 col-md-4 '>
                        <Link className='links display-block'  to='/#'>What is cDram?</Link>
                        <Link className='links display-block'  to='/#'>About Dram</Link>
                    </div>
                    <div className='order-nol-2 order-md-3 col-nol-6  col-md-4 col-xl-4'>
                        <Link className='links display-block'  to='/about'>About</Link>
                        <Link className='links display-block'  to='/contacts'>Contacts</Link>
                        <Link className='links display-block'  to='/faq'>FAQ</Link>
                    </div>
                </div>
                <div className='footerLogoSection my-md-4 my-lg-2 my-xl-0 col-md-12 col-lg-4 col-xl-4'>
                    <Link onClick={scroll} to='/'>
                        <img src={logoWhite} alt="cDram_logo" />
                    </Link>
                    <p>Opportunity to earn money using cDram. Moreover, the earlier the user buys cDram, the greater will be his benefit, since the 
                        cost will increase from 0.1 usdt to 500 usdt.cDram - global monetary and financial infrastructure. Be a part of it now!</p>
                </div>
                <div className="footerLastSection container-fluid row">
                    <div className='order-lg-1 order-nol-2 col-md-8 col-xl-8'>
                        <p >cDram © 2022 All rights reserved.</p>
                        <div><span>Privacy Policy</span>  <span>Terms of Service</span></div>
                    </div>
                    <div className='order-lg-2 order-nol-1 my-md-3 my-sm-3  col-md-12 col-lg-4 col-xl-4'>
                        <Link className='links footerIcons insta' to='/insta'><FaInstagram/></Link>
                        <Link className='links footerIcons' to='/facebook'><ImFacebook/></Link>
                        <Link className='links footerIcons youtube' to='/youtube'><FaYoutube/></Link>
                    </div>
                </div>
            </div>




            <div></div>
        </div>
    )
}


export default Footer