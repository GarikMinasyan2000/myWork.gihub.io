const initialState = {
    secretBody:[{word:'hurdle',clicked: false},{word:'deer',clicked: false},{word:'rhythm',clicked: false},{word:'vetnaras',clicked: false},{word:'pretty',clicked: false},{word:'wisdom',clicked: false},{word:'slab',clicked: false},{word:'solve',clicked: false},{word:'hurdly',clicked: false},{word:'either',clicked: false},],
    emptyBody:[],
}

const ADD_SECRET = 'ADD_SECRET'
const REMOVE_SECRET = 'REMOVE_SECRET'

const SecretReducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_SECRET:
            return{
                ...state,
                emptyBody:[...state.emptyBody , action.secretSlovo] 
            }
        case REMOVE_SECRET:
            const indexItem = state.emptyBody.indexOf(action.slova)
            state.emptyBody.splice(indexItem, 1)
            return{
                ...state,
                emptyBody:[...state.emptyBody] 
            }
        default:return state
    }
}
export const getSecretSlovo = (secretSlovo) => ({type:ADD_SECRET,secretSlovo})
export const removeSecretSlovo = (slova) => ({type:REMOVE_SECRET,slova})


export default SecretReducer
