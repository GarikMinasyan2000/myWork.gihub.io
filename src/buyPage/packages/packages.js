import React from 'react';
import './packages.scss'

const Packages = () => {
    return(
            <div className="packages">
                <h1 className='title'>Packages</h1>
                <div className="cartsContainer justify-content-nol-center container row">
                    <div className="col-nol-12 my-nol-3 mx-lg-2  my-lg-0 col-md-6 col-lg-3 buyCarts simple">
                        <h1>Simple</h1>
                        <div className="cartContent">
                            <p className='cartContentP'>
                                <span className='small'>Interest rate on loans</span>
                                <span className='bolder'>No benefit</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Interest rate on deposits</span>
                                <span className='bolder'>No benefit</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>cDram Quantity</span>
                                <span className='bold'>0-999</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Price</span>
                                <span className='bold'>10 USTD</span>
                            </p>
                            <div>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div> 
                    <div className="col-nol-12 my-nol-3 mx-lg-2  my-lg-0 col-md-6 col-lg-3 buyCarts silver">
                        <h1>Silver</h1>
                        <div className="cartContent">
                            <p className='cartContentP'>
                                <span className='small'>Interest rate on loans</span>
                                <span className='bold'>-0.1%</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Interest rate on deposits</span>
                                <span className='bold'>+0.1%</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>cDram Quantity</span>
                                <span className='bold'>10,000</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Price</span>
                                <span className='bold'>10 USTD</span>
                            </p>
                            <div>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div> 
                    <div className="col-nol-12 my-nol-3 mx-lg-2  my-lg-0 col-md-6 col-lg-3 buyCarts gold">
                        <h1>Gold</h1>
                        <div className="cartContent">
                        <p className='cartContentP'>
                                <span className='small'>Interest rate on loans</span>
                                <span className='bold'>-0.2%</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Interest rate on deposits</span>
                                <span className='bold'>+0.2%</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>cDram Quantity</span>
                                <span className='bold'>100,000</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Price</span>
                                <span className='bold'>10 USTD</span>
                            </p>
                            <div>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div> 
                    <div className="col-nol-12 my-nol-3 mx-lg-2  my-lg-0 col-md-6 col-lg-3 buyCarts platinum">
                        <h1>Platinum</h1>
                        <div className="cartContent">
                            <p className='cartContentP'>
                                <span className='small'>Interest rate on loans</span>
                                <span className='bold'>-0.3%</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Interest rate on deposits</span>
                                <span className='bold'>+0.3%</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>cDram Quantity</span>
                                <span className='bold'>1,000</span>
                            </p>
                            <p className='cartContentP'>
                                <span className='small'>Price</span>
                                <span className='bold'>10 USTD</span>
                            </p>
                            <div>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    )
}

export default Packages