import {combineReducers ,createStore} from 'redux'
import LoginReducer from "../redux/loginReducer";
import SecretReducer from '../redux/secretReducer';



const reducers = combineReducers({
    loginData:LoginReducer,
    secretData:SecretReducer
})


const store = createStore(reducers)


export default store