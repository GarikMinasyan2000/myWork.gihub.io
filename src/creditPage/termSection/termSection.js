import React from 'react';
import './termSection.scss'
import logoPurple from '../../images/homePageImages/LogoPurple.png'


const Term = () => {
    return(
        <div className="term">
            <div className="title">
                <h1>Term and interest rates of loans in</h1>
                <img src={logoPurple} alt="cDram_logo" title='cDram_logo' />
            </div>
            <p >Depending on the amount of cDram that users have, they have different status - Silver,
                Gold and Platinum. The higher the status, the more advantages in lending</p>
            <div className="termCartsCont mx-nol-0 row justify-content-nol-center container-fluid">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mx-md-2 mx-xl-3 my-nol-2 my-md-0 simple termCarts">
                    <h1>Simple</h1>
                    <p className='months'><span className="bold">0.1% -</span> <span className="small">1 month  </span></p>
                    <p className='months'><span className="bold">0.2% -</span> <span className="small">2 month  </span></p>
                    <p className='months'><span className="bold">0.3% -</span> <span className="small">3 month  </span></p>
                    <p className='months'><span className="bold">0.6% -</span> <span className="small">6 month  </span></p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mx-md-2 mx-xl-3 my-nol-2 my-md-0 silver termCarts">
                    <h1>Silver</h1>
                     <p className='months'><span className="bold">0.2% -</span> <span className="small">1 month  </span></p>
                    <p className='months'><span className="bold">0.3% -</span> <span className="small">2 month  </span></p>
                    <p className='months'><span className="bold">0.4% -</span> <span className="small">3 month  </span></p>
                    <p className='months'><span className="bold">0.7% -</span> <span className="small">6 month  </span></p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mx-md-2 mx-xl-3 my-nol-2 my-md-0 gold termCarts"> 
                    <h1>Gold</h1>
                    <p className='months'><span className="bold">0.3% -</span> <span className="small">1 month  </span></p>
                    <p className='months'><span className="bold">0.4% -</span> <span className="small">2 month  </span></p>
                    <p className='months'><span className="bold">0.5% -</span> <span className="small">3 month  </span></p>
                    <p className='months'><span className="bold">0.8% -</span> <span className="small">6 month  </span></p>
                </div>      
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mx-sm-0 my-nol-2 my-md-0 mx-md-2 mx-xl-3   platinum termCarts">
                    <h1>Platinum</h1>
                    <p className='months'><span className="bold">0.4% -</span> <span className="small">1 month  </span></p>
                    <p className='months'><span className="bold">0.5% -</span> <span className="small">2 month  </span></p>
                    <p className='months'><span className="bold">0.6% -</span> <span className="small">3 month  </span></p>
                    <p className='months'><span className="bold">0.9% -</span> <span className="small">6 month  </span></p>
                </div>
            </div>
        </div>
    )
}
export default Term