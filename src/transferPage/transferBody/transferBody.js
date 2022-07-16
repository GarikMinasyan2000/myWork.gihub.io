import React, { useState } from 'react';
import Collateral from '../../collateral/collateral';
import './transferBody.scss'
import {Link}from 'react-router-dom'

const TransferBody = () => {
    const [dropDownToggler1,setDropDownToggler1] = useState(true)
    const toggler1 = () => {
        setDropDownToggler1(!dropDownToggler1)
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
    return (
        <div className='transferBody'>
            <h1>Transfer</h1>
                <div className="transferBodyContainer ">
                    <div className="div">
                        <p >Amount</p>
                        <input  type="text" placeholder='20' />
                        <label  onClick={toggler1} htmlFor="selectToken">
                            <div className="icon-Subtractihgyigu display" style={{color:'#800080'}}></div>
                            <div className="icon-ic_ustdihgyigu none display" style={{color:'#26A17B'}}></div>
                            <select onChange={changeFirstValue} id='selectToken' name="select" className="selectToken">
                                <option value='cDram'>cDram</option>
                                <option value='USDT'>USDT</option>
                            </select>
                                <div className={dropDownToggler1 ? 'icon-ic_drop_down dropDown' : 'icon-ic_drop_down dropDown activeToggler'}></div>
                        </label>
                    </div>
                    <div className="adres">
                        <p>Recipient's public address</p>
                        <input type="text" className='input' name="" id="" placeholder='@!#$%^&' />
                    </div>
                    <div className="warning">
                        <span className="icon-ic_exclamation_triangle iconWarning"></span>
                        <span>Please be careful incorrectly entered address can not be returned</span>
                    </div>
                    <div className="link">
                        <Link to='#'>View Invoice</Link>
                    </div>
                    <div className="transferBtn">
                        <button>Transfer</button>
                    </div>
                </div>
                <div className="transferInfo">
                    <p className='tittle'>If the recipient does not have a cDram account, send an invitation:</p>
                    <p className='text'>Send an invitation and get cDram in the amount of 10% of the amount of the first purchase of a user who has registered in the application at your invitation</p>
                    <button>Send invitation</button>
                </div>
        </div>
    )
}

export default TransferBody