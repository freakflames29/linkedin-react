import {SET_USER} from "../actions/actionType.js";

const INITIAL_STATE = {
    user: null
}

const userReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }


        default:
            return state
    }
}

export default userReducers;