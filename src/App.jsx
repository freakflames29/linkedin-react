import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";

function App() {


    return (<>
            <div>
                <Router>
                    <Routes>
                        <Route exact path={"/"} element={<Login/>}/>

                    </Routes>
                </Router>
            </div>
        </>)
}

export default App
