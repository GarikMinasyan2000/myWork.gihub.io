import React, { useState ,useEffect}from 'react';
import {FaAngleLeft} from 'react-icons/fa'
import './header.scss'
import {useSelector, useDispatch} from 'react-redux'
import logoImg from '../../images/logo.png'
import '../../icons/style.css';
import { Link } from 'react-router-dom';
import ModalWindowHeader from './modalHeader/modalHeader';
import { getNotifCount, loginStatusDisp } from '../../redux/loginReducer';



const Header = () => {
    const loginStatus = useSelector( store => store.loginData.loged)
    const notifBody = useSelector(store => store.loginData.notifBody)
    const notifCount = useSelector(store => store.loginData.notifCount)
    const dispatch = useDispatch()
    const [activeMenu,setActiveMenu] = useState(false)
    const [activeProfile,setActiveProfile] = useState(false)
    const [activeNotific,setActiveNotific] = useState(false)




    useEffect(()=>{
        dispatch(getNotifCount(notifBody.length))

        if ((localStorage.getItem('loged') || localStorage.getItem('logedVithMetamask')) !== null) {
            dispatch(loginStatusDisp(true))
        }

    },[])

    const toggleMenu = () => {
        setActiveMenu(!activeMenu)
    }
    const logOut = () => {
        dispatch(loginStatusDisp(false))
        setActiveProfile(false)
        if (localStorage.getItem('loged')) {
            localStorage.removeItem('loged')
        }else{
            localStorage.removeItem('logedVithMetamask')

        }
      
    }
    const activeDownProfile = () => {
        setActiveProfile(!activeProfile)
        setActiveNotific(false)

    }
    const activeDownNotific = () => {
        setActiveProfile(false)
        setActiveNotific(!activeNotific)
    }

    return(
        <nav className="navbar navbar-expand-lg ">
            <div className=" navMenu navbar-expand-lg row container-fluid ">
                <div className=" menu navbar-brand row col-nol-7 col-sm-7 col-md-6 col-lg-9 col-xl-10">
                <Link to='/' className='logo col-sm-9 col-md-8 col-lg-3 col-xl-2'>
                    <img className='logo col-sm-12 ' src={logoImg} alt="cDram_logo" title='Home_Page' />
                </Link>
                    <div className="collapse navbar-collapse col-lg-10 col-xl-10 " id="navbarSupportedContent">
                        <div className="nav navbar-nav ">
                            <Link  to='/buy' className="links nav-item mx-lg-2 mx-xl-4 span" title='Buy'>Buy </Link>
                            <Link  to='/sell' className="links nav-item mx-lg-2 mx-xl-4 span" title='Sell'>Sell</Link>
                            <Link  to='/deposite' className="links nav-item mx-lg-2 mx-xl-4 span" title='Deposite'>Deposite</Link>
                            <Link  to='/credit' className="links nav-item mx-lg-2 mx-xl-4 span" title='Credit'>Credit</Link>
                            <Link  to='/transfer' className="links nav-item mx-lg-2 mx-xl-4 span" title='Transfer'>Transfer</Link>
                            <Link  to='/what_is_cDram' className="links nav-item mx-lg-2 mx-xl-4 span" title='What is cDram?'>What is cDram?</Link>
                        </div>
                    </div>
                </div>
                <button onClick={toggleMenu}  className="navbar-toggler col-nol-1 col-sm-1 col-md-6 btnBar " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className='icon-ic_menu_shape h1'></div>
                </button>
                <ModalWindowHeader active={activeMenu} setActive={setActiveMenu}>
                    <div className="modalMenuContent">
                        <div className="modalTitle">
                            <h1>Menu</h1>
                            <span onClick={()=> setActiveMenu(false)} className="icon-Close-Button path1 closeBtn"><span className="icon-Close-Button path2"></span></span>
                        </div>
                        <div className="modalBody ">
                            <Link onClick={()=> setActiveMenu(false)} to='/buy' className="links " title='Buy'>Buy </Link>
                            <Link onClick={()=> setActiveMenu(false)} to='/sell' className="links  " title='Sell'>Sell</Link>
                            <Link onClick={()=> setActiveMenu(false)} to='/deposite' className="links  " title='Deposite'>Deposite</Link>
                            <Link onClick={()=> setActiveMenu(false)} to='/credit' className="links  " title='Credit'>Credit</Link>
                            <Link onClick={()=> setActiveMenu(false)} to='/transfer' className="links  " title='Transfer'>Transfer</Link>
                            <Link onClick={()=> setActiveMenu(false)} to='/what_is_cDram' className="links  " title='What is cDram?'>What is cDram?</Link>
                            {loginStatus?
                                <>
                                    <div onClick={activeDownNotific} className="notif">
                                        <div style={{display:'flex'}}>
                                            <span className="icon-ic_bell bell ">
                                            {notifCount > 0 && 
                                                <span className='countNotif'>{notifCount}</span>
                                            }
                                            </span>
                                            <p>Notifications</p>
                                        </div>
                                        <div className={activeNotific ? "angle active" : 'angle'}>
                                            <FaAngleLeft/>
                                        </div>
                                    </div>
                                    <div onClick={activeDownNotific} className={activeNotific ? 'notifBody activeDown' : 'notifBody'}>
                                        {
                                            notifBody.length > 0 ?
                                            notifBody.map((item,index) => {
                                                return(
                                                    <div key={index} className='item'>
                                                        <span className="icon-ic_exclamation_circle warning"></span>
                                                        <div className="flex">
                                                            <p className='title'>{item.title}</p>
                                                            <p className='text'>{item.body}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            <div style={{textAlign:'center'}}>
                                                <span className='havent'>You haven't notifications</span>
                                            </div>
                                        }
                                    </div>
                                    <div className="myAccount">
                                        <span className="icon-ic_user user"></span>
                                        <p>My account</p>
                                    </div>

                                    <div className="settings">
                                        <span className="icon-ic_setting user"></span>
                                        <p>Settings</p>
                                    </div>

                                    <div onClick={logOut} className="settings exit">
                                        <span className="icon-ic_exit user"></span>
                                        <p>Log out</p>
                                    </div>
                                </>
                            :
                                <>
                                    <Link onClick={()=> setActiveMenu(false)} to='/login'  className='links col-lg-1 col-xl-1  span login'>Login</Link>
                                    <Link onClick={()=> setActiveMenu(false)} to='/register' className='links col-lg-1 col-xl-1 span reg'>Registration</Link>
                                </>

                            }
                            
                            <select name="lang" className='lang' id="">
                                <option className='option active' value="eng">Eng</option>
                                <option className='option' value="hy">Հայ</option>
                                <option className='option' value="ru">Рус</option>
                            </select>
                        </div>
                    </div>
                </ModalWindowHeader>
                <div className="collapse navbar-collapse col-xl-2 regForm">
                    {
                        loginStatus ?
                        <>
                            <span className="icon-ic_user a relative" onClick={activeDownProfile}>
                                {
                                activeProfile &&
                                    <div className="downProfile ">
                                            <Link className='links myAccount' state={{display: 'flex'}} to='myAccount'>
                                                <span className="icon-ic_user user"></span>
                                                <p>My account</p>
                                            </Link>
                                            <div className="settings">
                                                <span className="icon-ic_setting user"></span>
                                                <p>Settings</p>
                                            </div>
                                            <div onClick={logOut} className="settings exit">
                                                <span className="icon-ic_exit user"></span>
                                                <p>Log out</p>
                                        </div>
                                    </div>
                                }
                            </span>
                            <span onClick={activeDownNotific} className="icon-ic_bell a relative">
                                {notifCount > 0 && 
                                    <span className='absolute'>{notifCount}</span>
                                }
                                {       
                                    activeNotific &&
                                    <div className="downNotific">     
                                        <p className='titleNot'>Notifications</p>
                                        {   
                                            notifBody.length > 0 ?
                                            notifBody.map((item,index) => {
                                                return(
                                                    <div key={index} className='item'>
                                                        <span className="icon-ic_exclamation_circle warning"></span>
                                                        <div className="flex">
                                                            <p  className='title'>{item.title}</p>
                                                            <p  className='text'>{item.body}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : 
                                            <div style={{textAlign:'center'}}>
                                                <span className='havent'>You haven't notifications</span>
                                            </div>
                                        }
                                    
                                        
                                    </div>

                                }
                               
                                                    

                            </span>  
                        </>
                        :
                        <>
                            <Link to='/login'  className='links col-lg-1 col-xl-1  span login'>Login</Link>
                            <button><Link to='/register' className='links col-lg-1 col-xl-1 span button'>Registration</Link></button>
                        </> 
                    }
                    
                    <select name="lang" className='lang' id="">
                        <option className='option active' value="eng">Eng</option>
                        <option className='option' value="hy">Հայ</option>
                        <option className='option' value="ru">Рус</option>
                    </select>
                </div>
            </div>                               
        </nav>
    )
} 

export default Header 