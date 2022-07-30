import { sendRequest } from "../api/api"
import { config } from "../config/config"

const initialState = {
    loged: false,
    notifBody:[
        {title:'Notification Title', body:'Proactively incubate innovative processes for '},
        {title:'Notification Title', body:'Proactively incubate innovative processes for '},
    ],
    notifCount:0,
    userToken:""
}

const LOGIN_VITH_METAMASK = 'LOGIN_VITH_METAMASK'
const NOTIF_BODY = 'NOTIF_BODY'
const NOTIF_COUNT = ' NOTIF_COUNT'
const GET_TOKEN = 'GET_TOKEN'


const LoginReducer = ( state = initialState, action) => {
    switch(action.type){
        case LOGIN_VITH_METAMASK:
            return{
                ...state,
                loged: action.loginStatus
            }
        case NOTIF_BODY:
            return{
                ...state,
                notifBody:action.newNotif
            }
        case NOTIF_COUNT:   
            return{
                ...state,
                notifCount:action.countNot
            }
        case GET_TOKEN:   
            return{
                ...state,
                userToken:action.token
            }
        default:return state
    }
}



export default LoginReducer


export const getNotifCount = (countNot) => ({type:NOTIF_COUNT, countNot})
export const loginStatusDisp = (loginStatus) => ({type:LOGIN_VITH_METAMASK, loginStatus})
export const getToken = (token) => ({type:GET_TOKEN, token})

export const loginReducer = (email,password)=> {
    console.log(email);
    console.log(password);
    return async (dispatch) => {
        const response = await sendRequest(config.login, 'POST',{email,password});

        console.log(response);
        if (response.code === 200) {
            dispatch(loginStatusDisp(true))
            dispatch(getToken(response.payload))
            localStorage.setItem('loged',response.payload)
            window.location.pathname = '/'

        }
   
    }
}
