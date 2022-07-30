import { useState } from 'react'
import './myAccount.scss'
import ModalWindow from '../modal/modalWindow'
import { loginStatusDisp } from '../redux/loginReducer'
import { useDispatch, useSelector } from 'react-redux/es/exports'
const MyAccount = () => {
    const dispatch = useDispatch()
    const [activeHome,setActiveHome] = useState(true)
    const [activeDeposite,setActiveDeposite] = useState(false)
    const [activeCredits,setActiveCredits] = useState(false)
    const [activeHistory,setActiveHistory] = useState(false)
    const [activeSettings,setActiveSettings] = useState(false)
    const [activeExitModal,setActiveExitModal] = useState(false)
    const token = useSelector(store => store.loginData.userToken)
    console.log(token);
    const home = () => {
        setActiveHome(true)
        setActiveDeposite(false)
        setActiveCredits(false)
        setActiveHistory(false)
        setActiveSettings(false)
    }
    const deposite = () => {
        setActiveHome(false)
        setActiveDeposite(true)
        setActiveCredits(false)
        setActiveHistory(false)
        setActiveSettings(false)
    }
    const credit = () => {
        setActiveHome(false)
        setActiveDeposite(false)
        setActiveCredits(true)
        setActiveHistory(false)
        setActiveSettings(false)
    }
    const history = () => {
        setActiveHome(false)
        setActiveDeposite(false)
        setActiveCredits(false)
        setActiveHistory(true)
        setActiveSettings(false)
    }
    const settings = () => {
        setActiveHome(false)
        setActiveDeposite(false)
        setActiveCredits(false)
        setActiveHistory(false)
        setActiveSettings(true)
    }
    const exit = () => {
        setActiveExitModal(true)
    }
    const logOut = () => {
        dispatch(loginStatusDisp(false))
        localStorage.removeItem('loged')
        setActiveExitModal(false)
        window.location.pathname = '/'
    }
    return (
        <div className="myAccountSection">
            <div className="myAccountBody">

                <div className='left'>
                    <div className="header">
                        <span className="icon-ic_user userIcon"></span>
                        <span className='myaccount'>My Account</span>
                        <span className="idUser">ID 1234564654</span>
                        <div className="status">
                            <span className="text">Status</span>
                            <span className="category">Simple</span>
                        </div>
                        <div>
                            <button>Chech cDram amount</button>
                        </div>
                    </div>
                    <div className="menu">
                        <div onClick={home} className={activeHome ? 'active' : ''}>
                            <span className="icon-ic_home_alt"></span>
                            <p>Home</p>
                        </div>
                        <div onClick={deposite} className={activeDeposite ? 'active' : ''}>
                            <span className="icon-ic_money_insert"></span>
                            <p>My Deposites</p>
                        </div>
                        <div onClick={credit} className={activeCredits ? 'active' : ''}>
                            <span className="icon-ic_money_withdraw"></span>
                            <p>My Credits</p>
                        </div>
                        <div  onClick={history} className={activeHistory ? 'active' : ''}>
                            <span className="icon-ic_history_alt"></span>
                            <p>Transaction History</p>
                        </div>
                        <div onClick={settings} className={activeSettings ? 'active' : ''}>
                            <span className="icon-ic_setting"></span>
                            <p>Settings</p>
                        </div>
                        <div onClick={exit}>
                            <span className="icon-ic_exit"></span>
                            <p>Log Out</p>
                        </div>
                    </div>
                </div>

                <div className='right'>
                    {token}
                </div>
            </div> 
            <ModalWindow active={activeExitModal} setActive={setActiveExitModal}>
                <div className="exitModalContent">
                    <h1>Are you sure you want to log out?</h1>
                    <p>After you log out of your account, you can log back in at any time.</p>
                    <div className="btnContainer">
                        <button className='no' onClick={()=>setActiveExitModal(false)}>Отмена</button>
                        <button className='yes' onClick={logOut}>Log out</button>
                    </div>
                </div>
            </ModalWindow>
        </div>
    )
}

export default MyAccount
