// Genral imports
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// Style imports
import './LoginForm.css';

const LoginForm = ({handleSubmit}) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = ({key, value}) => {
        setCredentials((prevState) => {
            return {...prevState, [key]: value};
        });
    };

    const handleUsernameChange = (event) => {
        handleChange({
            key: 'username',
            value: event.currentTarget.value
        });
    };

    const handlePasswordChange = (event) => {
        handleChange({
            key: 'password',
            value: event.currentTarget.value
        });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        await handleSubmit(credentials);
    };
    //TODO Add Credentials Inputs (With Input Component)
    return (
        <>

            <form id="login-form" onSubmit={handleSubmitForm}>

                <div className='credentials-and-password-container'>

                    <label>
                        <p>Username</p>
                        <input type="text" name="username" onChange={handleUsernameChange}/>
                    </label>
                    
                    <label>
                        <p>Password</p> 
                        <input type="password" name="password" onChange={handlePasswordChange}/>
                    </label>

                    <button
                        className='login-page-call-to-action'
                        type="submit"
                    >
                        Submit
                    </button>

                </div>
            </form>
        </>
    );
};

export default LoginForm;
