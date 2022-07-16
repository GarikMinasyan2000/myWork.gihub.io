import React from 'react';
import './transferBackground.scss'


const TransferBackground = () => {
    return(
        <div className="transferBackground container-fluid row justify-content-sm-between justify-content-xl-around">
            <div className='backTitle col-sm-12 col-md-6'>
                <h1>Transfer</h1>
                <p>You can send any amount of cDram to any user.</p>
            </div>
            <i className='backLogo icon-VariantsTransfer'></i>
        </div>
    )
}

export default TransferBackground