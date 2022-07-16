import React from 'react';
import './depositBackground.scss'


const DepositBackround = () => {
    return(
        <div className="depositBackground container-fluid row justify-content-sm-between justify-content-xl-around">
            <div className='backTitle col-sm-12 col-md-6'>
                <h1>Deposite</h1>
                <p>You can make deposits and receive dividends at favorable interest rates.</p>
            </div>
            <i className='backLogo icon-VariantsDeposit'></i>
        </div>
    )
}


export default DepositBackround