import {useState} from "react";
// import useToken from '../../Services/useToken';
import { Navigate, useNavigate } from "react-router-dom";

const LogoutPage = ({token}) => {

    // const { token, deleteToken } = useToken();
    const navigate = useNavigate();
    const [ formSubmitting, setFormSubmitting ] = useState(false);

    if (!token) {
        return (<Navigate to="/" />)
    } else {
        localStorage.removeItem('token');

        return (<Navigate to="/" />)
    }
}

export default LogoutPage;