import React from 'react';
import './backgroundSection.scss'

const BackgroundSection = () => {
    return(
        <div className="background container-fluid row justify-content-sm-between justify-content-xl-around">
            <div className='backTitle col-sm-12 col-md-6'>
                <h1>Credit</h1>
                <p>You can pledge cryptocurrencies and receive cDram or other cryptocurrencies on credit. 
                    The ratio of deposit to loan depends on the chosen currencies.</p>
            </div>
            <i className='backLogo icon-VariantsCredit'></i>
        </div>
    )
}
export default BackgroundSection