import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";

function App() {


    return (<>
        <div>
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<Login/>}/>
                    <Route exact path={"/home"} element={[<Header/>, <Home/>]}/>


                </Routes>
            </Router>
        </div>
    </>)
}

export default App
