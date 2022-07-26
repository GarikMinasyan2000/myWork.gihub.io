import './about.scss'
import logoC from '../images/LogoPurple.png'
import illustration1 from '../images/illustration about 1.png'
import illustration2 from '../images/illustration about 2.png'
import illustration3 from '../images/illustration about 3.png'
import Options from './options'
const About = () => {
    return(
        <div className="aboutSection">
             <div className="aboutBackground container-fluid row justify-content-sm-between justify-content-xl-around">
                <div className='backTitleAbout col-sm-12 col-md-8'>
                <div style={{display:'flex'}}>
                    <h1>About</h1>
                    <img src={logoC} alt="cDram_logo" />
                </div>
                    <p>cDram is intended to be the next step in the evolution of the national currency of Armenia - dram
                        cDram has positive properties of both fiat currencies and cryptocurrencies</p>
                </div>
                <i className='backLogo icon-Subtractihgyigu'></i>
            </div>
            <div className="projectGoals ">
                <h1>Project Goals</h1>
                <div className="flexGoal row justify-content-sm-center justify-content-md-between text-sm-center text-md-start">
                    <div className='col-sm-11 col-md-6 ' >
                        <img src={illustration1} alt="" />
                    </div>
                    <div className='col-sm-11 col-md-6 text'>
                        <h1>Vison and Misson</h1>
                        <p>Vision - Competitive, growing and global currency market.  
                            The mission is to create a simple global monetary and financial
                            infrastructure that gives everyone the opportunity to easily, 
                            quickly, safely and without loss transfer, store and use money.</p>
                    </div>
                </div>
                <div className="flexGoal row justify-content-sm-center justify-content-md-between text-sm-center text-md-start">
                    <div className='col-sm-11 col-md-6 order-sm-2 order-md-1 text' >
                        <h1>Social Significance – Dram Development</h1>
                        <p>The national currency of Armenia, the dram, is not distinguished by reliability and stability, besides this, 
                            the dram is not known outside of Armenia and is not considered valuable. Our goal is to change this and we believe
                            that CryptoDram will become one of the best money in the world</p>
                    </div>
                    <div className='col-sm-11 col-md-6 order-sm-1 order-md-2 text-md-end'>
                        <img  src={illustration2} alt="" />
                    </div>
                </div>
                <div className="flexGoal row justify-content-sm-center justify-content-md-between text-sm-center text-md-start">
                    <div className='col-sm-11 col-md-6 '>
                        <img src={illustration3} alt="" />
                    </div>
                    <div className='col-sm-11 col-md-6 text'>
                        <h1>Commercial value</h1>
                        <p>Opportunity to earn money using cDram. Moreover, the earlier the user buys cDram, the greater will
                            be his benefit, since the cost will increase from 0.1 usdt to 500 usdt.</p>
                    </div>
                </div>

                <div className="quantity">
                    <div>
                        <img src={logoC} alt="" />
                        <h1>Quantity</h1>
                    </div>
                    <p>cDram coins will be issued in limited quantity </p>
                    <p className='purple'>only 2,100,000 units.</p>
                    <button>Rate and quantity of cDram</button>
                </div>
            </div>
            <Options/>
        </div>
    )
}


export default About