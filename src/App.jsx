import {useEffect, useLayoutEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import {getUserAuth} from "./actions/index.js";
import {connect} from "react-redux";

function App(props) {

    // const [loading,setLoading ] = useState(true)
    //
    useEffect(() => {
        props.getUserauth()
    }, []);



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

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    getUserauth: () => dispatch(getUserAuth())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
