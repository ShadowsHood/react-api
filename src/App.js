import './App.css';

import HomePage from "./Page/Home/Home";
import LoginPage from "./Page/Login/LoginPage";
import Layout from "./Page/Layout/Layout";
import useToken from './Services/useToken';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    
    // TODO Get user from local storage
    
    // localStorage.setItem('token', 'klubikluk');
    // const user = localStorage.getItem('token');

    const { token, setToken } = useToken();
    // console.log(token)
    if (!token) {
        //TODO Navigate to login
        return(
            <Navigate to="/login" />
        );
    } else {
        return children;
    }
}

function App() {

//Navigation dans requireAuth
  return (
    //TODO ROUTER
    <BrowserRouter>
        <RequireAuth />
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
