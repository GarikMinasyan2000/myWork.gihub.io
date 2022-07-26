import { useState } from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { Link } from 'react-router-dom'
import ModalWindow from '../modal/modalWindow'
import './contacts.scss'



const Contacts = () => {

    const [errorMail,setErrorMail] = useState(false)
    const [isEndabled,setIsEnabled] = useState(false)
    const [activeModalMessage,setActiveMOdalMessage] = useState(false)
    const [activeModalMessageError,setActiveMOdalMessageError] = useState(false)


    const changeMailValue = (e) => {
        const regexpMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(regexpMail.test(e.target.value));
        regexpMail.test(e.target.value) ? setErrorMail(false) : setErrorMail(true)
    }   
    return(
        <div className='contactsSection'>
            <div className="contactsBackground container-fluid row justify-content-sm-between justify-content-xl-around">
                <div className='backTitle col-sm-12 col-md-6'>
                    <h1>Contact Us</h1>
                    <p>Any question or remarks?Just write us a message!</p>
                </div>
                <i className='backLogo icon-IllustrationContact'></i>
            </div>
            <div className="contactsContainer container row">
                <div className='col-nol-12 col-md-6 firstCont'>
                    <h1>Contact Information</h1>
                    <p>Fill up the form and our Team will get back to you within  24 hours.</p>
                    <div className="contactsInfo">
                        <div className="number">
                            <i className="icon-ic_phone"/>
                            <p>+374 55 55 55 55</p>
                        </div>
                        <div className="mailAddres">
                            <i className="icon-ic_envelope_alt"/>
                            <p>hello@cdram.com</p>
                        </div>
                        <div className="location">
                            <i className="icon-ic_location_point"/>
                            <p>Armenia,Yerevan Baghramyan 26</p>
                        </div>
                        <div className="sitesIcons ">
                            <Link className='links insta' to='/insta'><FaInstagram/></Link>
                            <Link className='links facebook' to='/facebook'><ImFacebook/></Link>
                            <Link className='links youtube' to='/youtube'><FaYoutube/></Link>
                        </div>
                    </div>
                    <span className="icon-Variantsfeature absolute"></span>
                </div>
                <div className='col-nol-12 col-md-6 my-sm-4 my-md-0 secondCont'>
                    <div className="email">
                        <p>Your Email</p>
                        <input className={errorMail ? 'error' : ''} onChange={changeMailValue} type="text" placeholder='Enter your Email' />
                        {
                            errorMail && <p style={{color:'red', marginLeft:'20px',textAlign:'start'}}>Invalid email</p>
                        }
                    </div>
                    <div className="message">
                        <p>Message</p>
                        <textarea placeholder='Whrite a message...'></textarea>
                    </div>
                    <button onClick={()=>setActiveMOdalMessage(true)} className={isEndabled ? 'enabled' : ''}>Send Message</button>
                </div>
            </div>
            <ModalWindow active={activeModalMessage} setActive={setActiveMOdalMessage}>
                <span className="icon-Close-Button path1 closeBtn"><span className="icon-Close-Button path2"></span></span>
                <div className='modalMessageContent'>
                    <i className="icon-ic_envelope_check"></i>
                    <div style={{display:'block'}}>
                        <h1>Message sent</h1>
                        <p>Your message has been sent. Wait for the specialist's answer</p>
                    </div>
                </div>
                <button className='buttonModalMessage'><Link to='/' className='links'>To Home page</Link> </button>
            </ModalWindow>
            <ModalWindow active={activeModalMessageError} setActive={setActiveMOdalMessageError}>
                <span className="icon-Close-Button path1 closeBtn"><span className="icon-Close-Button path2"></span></span>
                <div className='modalMessageContent'>
                    <i className="icon-ic_times_circle"></i>
                    <div style={{display:'block'}}>
                        <h1>Error</h1>
                        <p>Retry your request or try again later</p>
                    </div>
                </div>
                <button className='buttonModalMessage'><Link to='/' className='links'>To Home page</Link> </button>
            </ModalWindow>
        </div>
    )
}

export default Contacts