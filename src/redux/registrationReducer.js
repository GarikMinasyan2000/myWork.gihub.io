import {sendRequest} from '../api/api'
import { useSelector} from 'react-redux';
import { config } from '../config/config';

const initialState = {
    stateMail:"",
    statePassword:""
}

const REGISTRATION = 'REGISTRATION'
const GET_MAIL_VALUE = 'GET_MAIL_VALUE'
const GET_PASS_VALUE = 'GET_PASS_VALUE'

const RegisterReducer = ( state = initialState, action) => {
    switch(action.type){
        case REGISTRATION:
            return{

            }
        case GET_MAIL_VALUE:
            return{
                ...state,
                stateMail:action.email
            }
        case GET_PASS_VALUE:
            return{
                ...state,
                statePassword:action.password
            }
        default:return state
    }
}

export default RegisterReducer

export const getMail = (email) => ({ type: "GET_MAIL_VALUE", email});
export const getPasword = (password) => ({ type: "GET_PASS_VALUE", password});


export const registrationReducer = (email,password)=> {
    return async () => {
        const response = await sendRequest(config.registration, 'POST',{email,password});
    }
}

