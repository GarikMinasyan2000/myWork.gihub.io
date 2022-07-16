import React from 'react'
import './collateral.scss'


const Collateral = () => {
    return(
        <div className="collateralSection container-fluid">
            <div className="steper justify-content-nol-center row">
                <div style={{display:'flex'}} className='justify-content-nol-center justify-content-md-end my-nol-5 my-md-1 col-nol-12 col-md-4 '>
                    <div className='elipse purpleBack'>1
                        <p className=' purpleText'>Collateral charge</p>
                    </div>
                    <div className='rectangle'></div>
                    <div className='elipse'>2
                        <p>Collateral charge confirmation</p>
                    </div>
                </div>

                <div className='col-md-4 rectangle none'></div>

                <div style={{display:'flex'}} className=' justify-content-nol-center justify-content-md-start my-nol-2 my-md-1 col-nol-12 col-md-4 '>
                    <div className='elipse'>3
                        <p>Loan transfer</p>
                    </div>
                    <div className='rectangle'></div>
                    <div className='elipse'>4
                        <p>Loan transfer confirmation</p>
                    </div>
                </div>
            </div>
            <div className="charge">
                <h1><span>Collateral</span> charge</h1>
                <p>Enter the public address of your Crypto Wallet to write off the deposit.</p>
                <div className="inputCont">
                    <p>Wallet Adress</p>
                    <input type="text" name="walletAdress" id="walletAdress" placeholder='@!#!@^&*^%$#' />
                    <div style={{textAlign:'center'}}>
                        <button>Charge</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export  default Collateral 