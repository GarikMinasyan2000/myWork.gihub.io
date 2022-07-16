const initialState = {
    loged: false
}

const LOGIN = 'LOGIN'


const LoginReducer = ( state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                loged: action.loginStatus
            }
            default:return state
    }
}



export default LoginReducer



export const loginStatusDisp = (loginStatus) => ({type:LOGIN, loginStatus})