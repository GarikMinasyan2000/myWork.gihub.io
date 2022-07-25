import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import './loginPage.scss'
import { loginStatusDisp } from '../../../redux/loginReducer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const useValidation = (value, validations) => {
    
    const [isEmpty,setIsEmpty] = useState(true)
    const [minLengthError,setMinLengthError] = useState(false)
    // const [emailError, setEmailError] = useState(false)


    

    useEffect(()=>{
        for (const validation in validations) {
        switch (validation){
            case 'minLength':
                value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
            break;

            case 'isEmpty':
                value ? setIsEmpty(false) : setIsEmpty(true)
            break;

            // case 'isEmail':
            //     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            //     re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
            // break;
            }
    }
    },[value])

    return{
        isEmpty,
        // emailError,
        minLengthError,
    }
}

const useInput = (initaialValue, validations) => {
    const [value, setValue] = useState(initaialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)

    }

    return{
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    }
}
const LoginPage = () => {
    const dispatch = useDispatch()
    const [isPassword, setIsPassword] = useState(true);
   

    const loginWithMetamask = () => {
        if(window.ethereum && window.ethereum.isMetaMask){
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(result => {
                dispatch(loginStatusDisp(true))
                localStorage.setItem('loged',result)
                window.location.pathname = '/'
            })
            .catch(error => {
                console.log(error);
            })
        }else {
            console.log('Need to install MetaMask');
			// setErrorMessage('Please install MetaMask browser extension to interact');
            alert('Need to install MetaMask')
        }
    }

    const handleSetPassword = () => {
        setIsPassword(!isPassword);
    }
    const [submited, setSubmited] = useState(false)
    const submit = () => {
        setSubmited(true)
    }
    const email = useInput('', { isEmpty: true, minLength: 1 })
    const password = useInput('', { isEmpty: true, minLegth: 8 })


    return(
        <div className='loginPage'>   
            <div className="loginContainer ">
                <div className="title">
                    <h1>Login</h1>
                    <Link to='/register'>Registration</Link>
                </div>
                <div className="mailInp">
                    <p>Email</p>
                    <input 
                        className={submited && email.isEmpty ?  'input error ':'input notError' }
                        onChange={e => email.onChange(e)} 
                        onBlur={e=> email.onBlur(e)}  
                        value={email.value} 
                        type="text" 
                        placeholder='Enter your Email'/>
                </div>
                <div className="passInp">
                    <div className="passwordCont">
                        <p>Password</p>
                        <p className='forgot'>Forgot Password?</p>
                    </div>
                    <input 
                         className={submited && password.isEmpty ? 'input error' :'input notError' }
                         onChange={e => password.onChange(e)} 
                         onBlur={e=> password.onBlur(e)} 
                         value={password.value} type={isPassword ? "password" : "text"} 
                         placeholder='Enter your password' />
                    
                    <div className="eyeCont">
                    {
                        isPassword ?
                        <span onClick={handleSetPassword} className="icon-ic_eye_slash eye"></span>
                        :
                        <span onClick={handleSetPassword} className="icon-ic_eye eye"></span>
                    }
                    </div>

                </div>
                    {submited && ( email.isEmpty || password.isEmpty) && <span className='errorText'>Fill in the required fields</span>}
                <button onClick={submit} className='loginBtn'>Login</button>
                <button onClick={loginWithMetamask}>metamask</button>

            </div>
        </div>
    )
}


export default LoginPage