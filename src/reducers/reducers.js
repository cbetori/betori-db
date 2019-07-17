import {combineReducers} from 'redux'

function currentQuery(state={}, action){
    if(action.type === "LOAD_QUERY"){
        return "maybe this works"
    }
    return state
}

export default combineReducers({
    currentQuery
})