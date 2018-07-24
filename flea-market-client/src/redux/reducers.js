import {combineReducers} from 'redux'

function test1(state = 0, action){
    return state;
}

function test2(state = 0, action){
    return state;
}

export default combineReducers({
    test1,
    test2
})