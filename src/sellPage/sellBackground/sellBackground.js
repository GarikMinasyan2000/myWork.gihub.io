import React from 'react';
import './sellBackground.scss'


const SellBackground = () => {
    return(
        <div className="sellBackSection container-fluid row justify-content-sm-between justify-content-xl-around">
            <div className='backTitle col-sm-12 col-md-6'>
                <h1>Sell</h1>
                <p>You can sell cDram for any cryptocurrency through your metamask account.</p>
            </div>
            <i className='backLogo icon-VariantsSell'></i>
        </div>
    )
}

export default SellBackground