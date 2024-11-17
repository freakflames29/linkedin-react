// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdgU-CPZf6ZvbdXQJddbLzeBPwLH7mtCU",
    authDomain: "linkedin-clone-b456f.firebaseapp.com",
    projectId: "linkedin-clone-b456f",
    storageBucket: "linkedin-clone-b456f.firebasestorage.app",
    messagingSenderId: "394276453878",
    appId: "1:394276453878:web:16101cb1653e6267145bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const FireDB = getFirestore(app)
const FireAuth = getAuth(app)
const Googleprovider = new GoogleAuthProvider()
const FireStorage = getStorage(app)


export {FireAuth, Googleprovider, FireStorage}

export default FireDB;



