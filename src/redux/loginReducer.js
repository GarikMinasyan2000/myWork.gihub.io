const initialState = {
    loged: false,
    notifBody:[
        {title:'Notification Title', body:'Proactively incubate innovative processes for '},
        {title:'Notification Title', body:'Proactively incubate innovative processes for '},
    ],
    notifCount:0
}

const LOGIN = 'LOGIN'
const NOTIF_BODY = 'NOTIF_BODY'
const NOTIF_COUNT = ' NOTIF_COUNT'



const LoginReducer = ( state = initialState, action) => {
    switch(action.type){
        case LOGIN:
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
        default:return state
    }
}



export default LoginReducer


export const getNotifCount = (countNot) => ({type:NOTIF_COUNT, countNot})
export const loginStatusDisp = (loginStatus) => ({type:LOGIN, loginStatus})