import './App.css';

import HomePage from "./Page/Home/Home";
import LoginPage from "./Page/Login/LoginPage";
import LogoutPage from "./Page/Login/LogoutPage";
import Layout from "./Page/Layout/Layout";
import { useLocation } from "react-router-dom";
import {useState} from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export function RequireAuth({ children, token }) {
    
    // TODO Get user from local storage

    // const { token } = useToken();

    let location = useLocation();
    // console.log(location.pathname)

    if (!token && location.pathname != '/login') {
        //TODO Navigate to login
        // console.log('pas de token')
        return(
            <Navigate to="/login" />
        );
    } else {
        return children;
    }
}

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
//Navigation dans requireAuth
  return (
    //TODO ROUTER
    <BrowserRouter>
        <RequireAuth token={token}/>
        <Routes>
            <Route path="/" element={<Layout token={token} setToken={setToken} />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage token={token} setToken={setToken} />} />
                <Route path="logout" element={<LogoutPage token={token} />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
