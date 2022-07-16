import {combineReducers ,createStore} from 'redux'
import LoginReducer from "../redux/loginReducer";



const reducers = combineReducers({
    loginData:LoginReducer
})


const store = createStore(reducers)


export default store