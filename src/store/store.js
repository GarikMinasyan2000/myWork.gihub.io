import {combineReducers ,createStore ,applyMiddleware} from 'redux'
import LoginReducer from "../redux/loginReducer";
import RegisterReducer from '../redux/registrationReducer';
import SecretReducer from '../redux/secretReducer';
import thunk from 'redux-thunk'


const reducers = combineReducers({
    loginData:LoginReducer,
    secretData:SecretReducer,
    registerData:RegisterReducer
})


const store = createStore(reducers, applyMiddleware(thunk))


export default store