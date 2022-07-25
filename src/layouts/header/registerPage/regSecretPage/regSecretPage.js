import { useState } from 'react'
import './regSecretPage.scss'
import {FaAngleLeft} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getSecretSlovo, removeSecretSlovo } from '../../../../redux/secretReducer'
import { Link } from 'react-router-dom'

const SecretPage = () => {
    const dispatch = useDispatch()
    const [activeCirclesCont,setActiveCirclesCont] = useState(true)
    const [isVerified,setIsVerified] = useState(true)
    const [isSecret,setIsSecret] = useState(false)
    const [isConfirmation,setIsConfirmation] = useState(false)
    const [isRegCompleted,setIsRegCompleted] = useState(false)
    const [isDisabled,setIsDisabled] = useState(true)
    
    const secretBody = useSelector(store => store.secretData.secretBody)
    const emptyBody = useSelector(store => store.secretData.emptyBody)
    const goSecretCont = () => {
        setIsSecret(true)
    }
    const goConfirmation = () => {
        setIsConfirmation(true)
    }
    const confirm = () => {
        setActiveCirclesCont(false)
        setIsSecret(false)
        setIsVerified(false)
        setIsConfirmation(false)
        setIsRegCompleted(true)
    }
    const addInEmpty = (e) =>{
        if (emptyBody.length >= 9) {
            setIsDisabled(false)
        }
        const slova =  e.target.innerText
        dispatch(getSecretSlovo(slova))

    }
    const removeIsEmpty = (e) => {
        const slova =  e.target.innerText
        secretBody.map(secretItem => {
            emptyBody.map(emptyItem => {
                if (emptyItem !== secretItem.word) {
                    secretItem.clicked = false
                }else{
                    secretItem.clicked = false
                    
                }
            })
        })
        dispatch(removeSecretSlovo(slova))
        if (emptyBody.length < 10) {
            setIsDisabled(true)
        }
    }
    secretBody.map((secretItem) => {
        emptyBody.map((emptyItem) => {
            if (secretItem.word === emptyItem) {
                secretItem.clicked = true
            }
        })
    })
    


    return(
        <div className='secretPage  justify-content-nol-center'>
            {
                activeCirclesCont &&
                <div className="circlesCont row justify-content-nol-center justify-content-md-start">
                        <div className='col-nol-3 col-md-2'>
                            <div className={isVerified ? "circle sucsses mx-nol-2 mx-md-0 " : 'circle '}>
                                {isSecret ? <span className="icon-ic_check check "></span> : <span>1</span>}
                                <p className={isVerified ? 'sucssesText' : ''}>Email has been verified</p>
                            </div>
                        </div>
                        
                        <div className={isSecret ? "gic sucsses col-nol-3 col-md-3" : 'gic col-nol-3 col-md-3'}></div>

                        <div className='col-nol-4 col-md-2'>
                            <div className={isSecret ? "circle sucsses" : 'circle '}>
                                {isConfirmation ? <span className="icon-ic_check check"></span> : <span>2</span>}
                                <p className={isSecret ? 'sucssesText sec' : 'sec'}>Secret phrase</p>
                            </div>
                        </div>
                        
                        <div className={isConfirmation ? "gic none sucsses col-md-3" : 'gic none col-md-3'}></div>
                        
                        <div className='col-nol-4 my-nol-5 justify-content-nol-center my-md-0 col-md-2'>
                            <div className={isConfirmation ? "circle sucsses " : 'circle '}>
                                <span>3</span>
                                <p className={isConfirmation ? 'sucssesText ' : ''}>Confirmation of secret phrase</p>
                            </div>
                        </div>
                        
                </div>
            }
            {
             isVerified && !isSecret && !isConfirmation &&
                <div className="bodyContVerif">
                        <div> <p>Success!!</p> your email has been verified</div>
                        <div className="icon">
                            <span className="icon-variantsuccess">
                                <span className="icon-variantsuccess path1"></span>
                                <span className="icon-variantsuccess path2"></span>
                            </span>
                        </div>
                        <p>.You have successfully verified your page, click continue for the next step</p>
                        <button className='secretBtn' onClick={goSecretCont}>Continue</button>
                </div>
            
            }
            {
                isSecret && !isConfirmation && 
                <div className='bodyContSecret'>
                        <h1> Secret phrase</h1>
                        <p>Your secret phrase is required to change your email</p>
                        <p> <span>Warning</span> please save the secret phrase as you can only see it once</p>
                        <div className="secretSlovCont">
                            <span>hurdly</span>
                            <span>deer</span>
                            <span>rhythm</span>
                            <span>vetnaras</span>
                            <span>pretty</span>
                            <span>wisdom</span>
                            <span>slab</span>
                            <span>solve</span>
                            <span>hurdly</span>
                            <span>either</span>
                        </div>
                        <button className='secretBtn' onClick={goConfirmation}>Continue</button>
                </div>
            }
            {
                isConfirmation && 
                <div className="bodyContConfirm">
                        <div onClick={()=> setIsConfirmation(false)} className="goBack"><FaAngleLeft/> Back</div>
                        <h1> Confirm your secret phrase</h1>
                        <p>Select each word in the it was presented you.</p>
                        <p> <span>Warning </span> please save the secret phrase as you can only see it once</p>
                        <div className="emptyContainer">
                            {
                                emptyBody.map((item,index) => {
                                    return(
                                        <span onClick={removeIsEmpty} className='emptyItem' key={index}>{item}</span>
                                    )
                                })
                            }
                        </div>
                        <div className="slovContainer">
                            {
                                secretBody.length > 0 &&
                                secretBody.map((item,index) => {
                                    return(
                                        <span className={item.clicked ? 'selected' : ''} onClick={addInEmpty} key={index}> {item.word}</span>
                                    )
                                })
                            }
                           
                        </div> 
                        <button onClick={confirm} disabled={isDisabled ? true : false} className={isDisabled ? 'secretBtn disabled' : 'secretBtn'}>Confirm</button>
                </div>
            }
            {
                isRegCompleted &&
                <div className="completed">
                    <div className='a1'><p>Congratulations!!!</p> Registration completed</div>
                    <span className="icon-Illustration-pizza pizza"></span>
                    <p className='title'>Thank you for creating account and joining the cDram!</p>
                    <div className="text">Now you will be automatically redirected to your personal account, if this did not happen, then click the button below</div>
                    <button><Link to='/login'>Login to my account</Link></button>
                </div>
            }
        </div>
    )
}

export default SecretPage