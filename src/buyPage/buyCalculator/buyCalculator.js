import React, { useState } from 'react';
import './buyCalculator.scss'
import {Link} from 'react-router-dom'

const BuyCalculator = () => {
    const [dropDownToggler1,setDropDownToggler1] = useState(true)
    const toggler1 = () => {
        setDropDownToggler1(!dropDownToggler1)
    }
    const [dropDownToggler2,setDropDownToggler2] = useState(true)
    const toggler2 = () => {
        setDropDownToggler2(!dropDownToggler2)
    }
    const changeFirstValue = (e) => {
        console.log(e.target.value);
        console.log(e.target.offsetParent.childNodes[0]);
        if (e.target.value === 'cDram') {
            e.target.offsetParent.childNodes[0].classList.remove('none')
            e.target.offsetParent.childNodes[1].classList.add('none')
        }else{
            e.target.offsetParent.childNodes[0].classList.add('none')
            e.target.offsetParent.childNodes[1].classList.remove('none')
        }
    }
    const changeSecondValue = (e) => {
        console.log(e.target.offsetParent.childNodes[0]);
        if (e.target.value ==='cDram') {
            e.target.offsetParent.childNodes[0].classList.remove('none')
            e.target.offsetParent.childNodes[1].classList.add('none')
        }else{
            e.target.offsetParent.childNodes[0].classList.add('none')
            e.target.offsetParent.childNodes[1].classList.remove('none')
        }
    }
    return(
        <div className="calcSection">
            <h1 className="title">Calculator</h1>
            <div className="calcFull">
                <div className="calculatorBuy row">
                    <div className="inputs my-md-3 my-lg-0 col-sm-12 col-md-12 col-lg-6">
                        <p>Rate now</p>
                        <div className="div row">
                            <input className='col-sm-4 col-md-8 col-lg-6' type="text" placeholder='20' />
                            <label className='col-sm-4 col-md-6 col-lg-6' onClick={toggler1} htmlFor="selectToken">
                                <div className="icon-Subtractihgyigu none display" style={{color:'#800080'}}></div>
                                <div className="icon-ic_ustdihgyigu  display" style={{color:'#26A17B'}}></div>
                                <select onChange={changeFirstValue} id='selectToken' name="select" className="selectToken">
                                    <option value='USDT'>USDT</option>
                                    <option value='cDram'>cDram</option>
                                </select>
                                    <div className={dropDownToggler1 ? 'icon-ic_drop_down dropDown' : 'icon-ic_drop_down dropDown activeToggler'}></div>
                            </label>
                        </div>
                    </div>

                    <span className='icon-rovno  rovno' ></span>

                    <div className="inputs my-md-3 my-lg-0 col-sm-12 col-md-12 col-lg-6">
                        <p className='secondP'>Amount</p>
                        <div className="div row seconddiv">
                            <input className='col-sm-4 col-md-8  col-lg-6' type="text" placeholder='20' />
                            <label className='col-sm-4 col-md-6  col-lg-6' onClick={toggler2} htmlFor="selectToken">
                                <div className="icon-Subtractihgyigu  display" style={{color:'#800080'}}></div>
                                <div className="icon-ic_ustdihgyigu none display" style={{color:'#26A17B'}}></div>
                                <select onChange={changeSecondValue} name="select" className="selectToken">
                                    <option value='cDram'>cDram</option>
                                    <option value='USDT'>USDT</option>
                                </select>
                                <div  className={dropDownToggler2 ? 'icon-ic_drop_down dropDown' : 'icon-ic_drop_down dropDown activeToggler'}></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="calcInfoBuy ">
                    <div className="flexInfo">
                        <span>You will get</span>
                        <span className='c20'>20 cDram</span>
                    </div>
                    <div className="link">
                        <Link  to='#'>View Invoice</Link>
                    </div>
                </div>
                <div className="btnBuy">
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default BuyCalculator