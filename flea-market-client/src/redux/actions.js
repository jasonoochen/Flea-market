import {
    reqRegister, 
    reqLogin
} from '../api'
import {
    AUTH_SUCCESS, 
    ERROR_MSG 
} from './action-types' 

const errorMsg = (msg) => ({type:ERROR_MSG, data: msg})
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

//register asychronized action
export const register = () => {
    return async dispatch => {
        /*
        const promise = reqRegister(user)
        promise.then(response => {
            const result = response.data
        })
        */
       const response = await reqRegister(user)
       const result = response.data
       if(result.code === 0){
        dispatch(authSuccess(result.data)) 
       }
       else{
        dispatch(errorMsg(result.msg))
       }
    }
}

//login asychronized action
export const login = () => {
    return async dispatch =>{
       const response = await reqLogin(user)
       const result = response.data
       if(result.code === 0){
        dispatch(authSuccess(result.data)) 
       }
       else{
        dispatch(errorMsg(result.msg))
       }
    }
}