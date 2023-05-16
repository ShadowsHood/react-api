import { useState } from 'react';

export default function useToken() {

    const saveToken = userToken => {
        localStorage.setItem('token', userToken);
        setToken(userToken.token);
    };

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString
    };

    const deleteToken = () => {
        const tokenString = localStorage.removeItem('token');;
    };

    const [token, setToken] = useState(getToken());

    return {
        setToken: saveToken,
        xToken: deleteToken,
        token
    }
}