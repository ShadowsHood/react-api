import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState} from "react";
// import useToken from '../../Services/useToken';
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = ({token, setToken}) => {

    const navigate = useNavigate();
    const [ formSubmitting, setFormSubmitting ] = useState(false);

    const handleSubmit = async (credentials) => {
        setFormSubmitting(true);
        console.log(credentials)
        try {
            //TODO Make Login call
            const login = await fetch('http://127.0.0.1:8000/api/login_check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            // console.log(login.statusText)
            if (login.statusText == 'OK') {
                const loginData = await login.json();
                // console.log('le login recupére apres requete : ', loginData.token);
                setToken(loginData.token);
                localStorage.setItem('token', loginData.token);
                navigate("/");
            }

        } catch (error) {
            console.log(error);
            // message
        }
        setFormSubmitting(false);
    };

    if (token) {
        return (<Navigate to="/" />)
    } else {
        return(
            <div>
    
                <LoginForm
                    handleSubmit={handleSubmit}
                />
    
            </div>
        )
    }
}

export default LoginPage;