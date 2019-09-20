import {UPDATE_USER} from '../actions/userActions'

export default function userReducer(state = '', action) {

    switch (action.type) {
        case UPDATE_USER: return action.payload.user
        default: return state
    }
}