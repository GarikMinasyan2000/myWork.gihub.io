import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './calculator.scss'
// import Select from 'react-select'
// import {FaAngleRight} from 'react-icons/fa'
const Calculator = (props) => {

    const activeModalSorry = () => {
        props.setActiveSorry(true)
    }
    const [dropDownToggler1,setDropDownToggler1] = useState(true)
    const toggler1 = () => {
        setDropDownToggler1(!dropDownToggler1)
    }
    const [dropDownToggler2,setDropDownToggler2] = useState(true)
    const toggler2 = () => {
        setDropDownToggler2(!dropDownToggler2)
    }
    const [dropDownToggler3,setDropDownToggler3] = useState(true)
    const toggler3 = () => {
        setDropDownToggler3(!dropDownToggler3)
    }
    const [dropDownToggler4,setDropDownToggler4] = useState(true)
    const toggler4 = () => {
        setDropDownToggler4(!dropDownToggler4)
    }
    const showTooltip = (e) => {
        e.target.parentElement.childNodes[2].classList.add('showToltip')
    }
    const closeTooltip = (e) => {
        e.target.parentElement.childNodes[2].classList.remove('showToltip')
        
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
    const changeColor = (e) => {
        if(e.target.value === 'simple'){
            e.target.offsetParent.childNodes[0].classList.remove('none')
            e.target.offsetParent.childNodes[1].classList.add('none')
            e.target.offsetParent.childNodes[2].classList.add('none')
            e.target.offsetParent.childNodes[3].classList.add('none')
        }
        if(e.target.value === 'silver'){
            e.target.offsetParent.childNodes[0].classList.add('none')
            e.target.offsetParent.childNodes[1].classList.remove('none')
            e.target.offsetParent.childNodes[2].classList.add('none')
            e.target.offsetParent.childNodes[3].classList.add('none')
        }
        if(e.target.value === 'gold'){
            e.target.offsetParent.childNodes[0].classList.add('none')
            e.target.offsetParent.childNodes[1].classList.add('none')
            e.target.offsetParent.childNodes[2].classList.remove('none')
            e.target.offsetParent.childNodes[3].classList.add('none')
        }
        if(e.target.value === 'platinum'){
            e.target.offsetParent.childNodes[0].classList.add('none')
            e.target.offsetParent.childNodes[1].classList.add('none')
            e.target.offsetParent.childNodes[2].classList.add('none')
            e.target.offsetParent.childNodes[3].classList.remove('none')
        }
    }
    return(
        <div className='calculatorSection'>
            <h1 className="title">
                <span className='loan'>Loan</span>
                <span className='calc'>Calculator</span>
            </h1>
            <div className="calculator">
                <div className="inputsCont row">
                    <div className="inputs col-sm-12 col-md-12 col-lg-6 row">
                            <p className='col-nol-12'>Collateral amount</p>
                            <div className="div">
                                <input className='' type="text" placeholder='20' />
                                <label className='' onClick={toggler1} htmlFor="selectToken">
                                    <div className="icon-Subtractihgyigu display" style={{color:'#800080'}}></div>
                                    <div className="icon-ic_ustdihgyigu none display" style={{color:'#26A17B'}}></div>
                                    <select onChange={changeFirstValue} id='selectToken' name="select" className="selectToken">
                                        <option value='cDram'>cDram</option>
                                        <option value='USDT'>USDT</option>
                                    </select>
                                        <div className={dropDownToggler1 ? 'icon-ic_drop_down dropDown' : 'icon-ic_drop_down dropDown activeToggler'}></div>
                                </label>
                            </div>
                    </div>
                    <div className="inputs col-sm-12 col-md-12 col-lg-6 row">
                            <p className='col-nol-12 seconddiv'>Loan amount</p>
                            <div className="div seconddiv">
                                <input className='' type="text" placeholder='20' />
                                <label className='' onClick={toggler2} htmlFor="selectToken">
                                    <div className="icon-Subtractihgyigu none display" style={{color:'#800080'}}></div>
                                    <div className="icon-ic_ustdihgyigu  display" style={{color:'#26A17B'}}></div>
                                    <select onChange={changeSecondValue} name="select" className="selectToken">
                                        <option value='USDT'>USDT</option>
                                        <option value='cDram'>cDram</option>
                                    </select>
                                    <div  className={dropDownToggler2 ? 'icon-ic_drop_down dropDown' : 'icon-ic_drop_down dropDown activeToggler'}></div>
                                </label>
                            </div>
                    </div>
                    <div className='selecCont  col-sm-12 col-lg-6'>
                        <p>Term</p>
                        <label onClick={toggler3} htmlFor="selectMonth">
                            <select name="" className='selectMonth'>
                                <option value="1">1 month</option>
                                <option value="2">2 month</option>
                                <option value="3">3 month</option>
                                <option value="6">4 month</option>
                            </select>
                            <div className={dropDownToggler3 ? 'icon-ic_drop_down dropDown' : 'icon-ic_drop_down dropDown activeToggler'}></div>
                        </label>
                    </div>
                    <div className='selecCont col-sm-12 col-lg-6'>
                        <div className='small relative'>Your status 
                            <span onMouseEnter={showTooltip} onMouseLeave={closeTooltip} className="icon-ic_question_circle"> </span>
                            <p className='toltip'> Depending on the amount of cDram that users have, 
                                    they have different status - Silver, Gold and Platinum.
                                    The higher the status, the more advantages in lending</p>
                        </div>
                        <label onClick={toggler4} htmlFor="selectMonth">
                            <div className="circles simple"></div>
                            <div className="circles silver none"></div>
                            <div className="circles gold none"></div>
                            <div className="circles platinum none"></div>
                            <select onChange={changeColor} name="" className='selectMonth selectColor'>
                                <option value="simple">Simple</option>
                                <option value="silver" >Silver</option>
                                <option value="gold" >Gold</option>
                                <option value="platinum">Platinum</option>
                            </select>
                            <div className={dropDownToggler4 ? 'icon-ic_drop_down dropDown' : 'icon-ic_drop_down dropDown activeToggler'}></div>
                        </label>
                    </div>
                </div>
                <div className="calcInfo ">
                    <div className='flex'>
                        <span className='bold flex'>You will get <span className='small'>(net of the loan disbursement fee)</span></span>
                        <span className='c1000'>1000 cDram</span>
                    </div>
                    <div className='flex'>
                        <span>Interest rate</span>
                        <span className='bold'>10%</span>
                        </div>
                    <div className='flex'>
                        <span>Loyalty level discount</span>
                        <span className='bold'>-0.02%</span>
                        </div>
                    <div className='flex'>
                        <span>Loan disbursement fee</span>
                        <span className='bold'>3%</span>
                        </div>
                    <div className='flex'>
                        <span>Actual interest rate</span>
                        <span className='bold'>4%</span>
                        </div>
                    <div className='flex'>
                        <span className='flex'>Amount to be paid <span className='small'>(at the and of term)</span></span>
                        <span className='bold'>1200 cDram</span>
                    </div>
                    <div className='linkInfo' >
                        <Link  to='#'>View Invoice</Link>
                    </div>
                </div>
                <div className="btnLoan">
                    <button onClick={activeModalSorry}>Get Loan</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator