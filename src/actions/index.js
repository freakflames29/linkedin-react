import {FireAuth, Googleprovider} from "../firebase.js";
import {signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"
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


export function getUserAuth() {
    return (dispatch) => {


        onAuthStateChanged(FireAuth, async (user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

export function signoutAPI() {
    return (dispatch) => {
        signOut(FireAuth)
            .then(() => {
                dispatch(setUser(null))
            })
            .catch(err => console.log(err))
    }
}