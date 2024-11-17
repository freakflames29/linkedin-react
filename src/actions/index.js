import {FireAuth, Googleprovider} from "../firebase.js";
import {signInWithPopup} from "firebase/auth"
import {SET_USER} from "./actionType.js";

export const setUser = (payload) => {
    return {
        type: SET_USER, user: payload
    }
}
export default function SigninAPI() {
    return (dispatch) => {
        signInWithPopup(FireAuth, Googleprovider)
            .then((payload) => {
                dispatch(setUser(payload.user))
                console.log(payload)
            })
            .catch(err => alert(err.message))
    }
}
