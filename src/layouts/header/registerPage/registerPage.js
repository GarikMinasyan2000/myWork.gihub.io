import React from 'react';
import './registerPage.scss'
import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getMail, getPasword, registrationReducer } from '../../../redux/registrationReducer';
import store from '../../../store/store';

const RegisterPage = () => {
    const dispatch = useDispatch()
    const [isPassword1,setIsPassword1] = useState(false)
    const [isPassword2,setIsPassword2] = useState(false)
    const handleSetPassword1 = () => {
        setIsPassword1(!isPassword1);
    }
    const handleSetPassword2 = () => {
        setIsPassword2(!isPassword2);
    }

    const [disabledd, setDisabled] = useState(true)
    const [isMailValid,setIsMailValid] = useState(false)
    const [eMailValue,setEMailValue] = useState()
    const [passwordStrength,setPasswordStrength] = useState(false)
    const [liSucsses1, setLiSucsses1] = useState(false)
    const [liSucsses2, setLiSucsses2] = useState(false)
    const [liSucsses3, setLiSucsses3] = useState(false)
    const [liSucsses4, setLiSucsses4] = useState(false)
    const [isBad,setIsBad] = useState(true)
    const [isAverage,setIsAverage] = useState(false)
    const [isStrong,setIsStrong] = useState(false)
    const [firstValue,setFirstValue] = useState()
    const [secondValue,setSecondValue] = useState()
    const [isChecked,setIsChecked] = useState(true)

    useEffect(()=>{
        
        if ( isMailValid && isStrong &&  (firstValue === secondValue)) {
            setDisabled(false)
        }else {
            setDisabled(true)
        }
    },[isChecked])

    const changeMailInp = (e) => {
        var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        let value = e.target.value.toLowerCase()
        setEMailValue(value)
        if (regexMail.test(value)) {
            setIsMailValid(true)
        }else{
            setIsMailValid(false)
        }
        // setIsChecked(true)
        // console.log(isChecked);

    }
    const validationPassword = (e) => {
        setPasswordStrength(true)
        // setIsChecked(true)
        // console.log(isChecked);

        let value = e.target.value
        setFirstValue(value)
        const regexPass = /^(?=.*[A-Z][a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isUpperFirst = /.*[A-Z].*/;
        const checkNumbers = /\d/;
        const checkLetters = /.*[A-Za-z].*/

        setLiSucsses1(value.length >= 8)
        setLiSucsses2(isUpperFirst.test(value))
        setLiSucsses3(checkNumbers.test(value) && checkLetters.test(value));
        setLiSucsses4(regexPass.test(value))
        
        if(liSucsses1 && liSucsses2 || liSucsses2 && liSucsses3 || liSucsses3 && liSucsses4 || liSucsses1 && liSucsses4){
            setIsBad(false)
            setIsAverage(true)
            setIsStrong(false)
        }else{
            setIsBad(true)
            setIsAverage(false)
            setIsStrong(false)
        }
        if (liSucsses1 && liSucsses2 && liSucsses3 & liSucsses4) {
            setIsBad(false)
            setIsAverage(false)
            setIsStrong(true)
        }else{
            setIsBad(false)
            setIsAverage(true)
            setIsStrong(false)
        }


    }
    const getSecondValue = (e) => {
        let secValue = e.target.value
        setSecondValue(secValue)
    }


    const check = (e) => {
        setIsChecked(!isChecked)
    }

    const registration = () => {
        dispatch(getMail(eMailValue))
        dispatch(getPasword(firstValue))
        dispatch(registrationReducer(eMailValue,firstValue))
    }
    return(
        <div className="regPage">
                <Link className='verif' to='/verif'> verification</Link>
            <div className="regContainer">
                <div className="title">
                    <h1>Registration</h1>
                    <Link to='/login'>Login</Link>
                </div>
                <div className="mailInp">
                    <p>Email</p>
                    <input onChange={changeMailInp} className={!isMailValid && eMailValue ? 'error' : ''} type="text" placeholder='Enter your Email'/>
                    {   
                        eMailValue && 
                        (
                            !isMailValid ? <span className='wrong'>Wrong Email</span> : ''
                        )
                    }
                </div>
                <div className="mailInp">
                    <p>Create password</p>
                    <input onChange={validationPassword} 
                        onBlur={()=>setPasswordStrength(false)} 
                        type={!isPassword1 ? "password" : 'text'} 
                        placeholder='Create Password' 
                        className={(!isStrong && firstValue) && 'require'}
                        />
                        {
                            (!isStrong && firstValue) && 
                            <span className='reqText' style={{color:'rgba(255,160,0)'}}>Password must be at least 8 characters long, including numbers and letters</span>
                        }
                    <div className="eyeCont">
                        {
                            isPassword1 ?
                            <span onClick={handleSetPassword1} className="icon-ic_eye eye"></span>
                            :
                            <span onClick={handleSetPassword1} className="icon-ic_eye_slash eye"></span>
                        }
                        {   
                            firstValue  &&
                            (
                                firstValue === secondValue ?
                                <span className="icon-ic_check check"></span>
                                :
                                <span className="icon-ic_times_circle check"></span>
                            )
                        }
                    </div>

                    {
                        passwordStrength && 
                        <div className="strength">
                            <h1>Password requirements</h1>
                            <ul>
                                <li className={liSucsses1 ? 'sucsses' : ''}>At least 8 characters</li>
                                <li className={liSucsses2 ? 'sucsses' : ''}>Contains capital letters</li>
                                <li className={liSucsses3 ? 'sucsses' : ''}>Consists of letters and numbers</li>
                                <li className={liSucsses4 ? 'sucsses' : ''}>Does not contain characters +/=()!@$% etc.</li>
                            </ul>
                            <hr />
                            <div className="colorCont">
                                <p>Password strength:</p>
                                <div className="color"> <div className={isBad ? "colorContent bad" : isAverage ? 'colorContent average' : 'colorContent strong'}></div> </div>
                                <div className="text">
                                    {
                                        isBad ? <span style={{color:'#EB4250'}}>BAD</span> :
                                        isAverage ? <span style={{color:'#FFA000'}}>AVARAGE</span> :
                                        <span style={{color:'#3BD16D'}}>STRONG</span>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="mailInp">
                    <p>Confirm password</p>
                    <input onChange={getSecondValue} type={!isPassword2 ? "password" : 'text'} placeholder='Create Password' />
                    <div className="eyeCont">
                    {
                        isPassword2 ?
                        <span onClick={handleSetPassword2} className="icon-ic_eye eye"></span>
                        :
                        <span onClick={handleSetPassword2} className="icon-ic_eye_slash eye"></span>
                    }
                    {
                        secondValue &&
                            (
                                firstValue === secondValue ? 
                                <span className="icon-ic_check check"></span>
                                :
                                <span className="icon-ic_times_circle check"></span>
                            )
                    }
                    </div>
                </div>

                <div className="checkboxContainer">
                    <input type="checkbox"  onChange={check} className='checkbox' name="check" id="" />
                    <p>Agree with <Link to='#'>Privacy policy</Link> and <Link to='#'>Terms</Link> of service</p>
                </div>
                <div className="btnContainer">
                    <button onClick={registration} disabled={disabledd} className={disabledd ? '' : 'enabled'}> Registration</button>
                </div>
            </div>

        </div>
    )
}


export default RegisterPage