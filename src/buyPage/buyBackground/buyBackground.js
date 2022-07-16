import React from 'react'
import './buyBackground.scss'


const BackgroundSection = () => {
    return(
            <div className="buyBackground container-fluid row mx-nol-1 justify-content-sm-between justify-content-xl-around">
                <div className='backTitle col-sm-12 col-md-6'>
                    <h1>Buy</h1>
                    <p>You can buy cDram for any cryptocurrency through your Metamask account</p>
                </div>
                <i className="icon-VariantsBuy backLogo"></i>
            </div>
    )
}

export default BackgroundSection