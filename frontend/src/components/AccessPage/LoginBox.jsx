import React, { useState } from 'react';
import styles from './Box.module.css';
import orImage from '../../assets/login/or.png';

const LoginBox = ({ toggleView }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setErrorMessage('');
        if (event.target.id === 'username') {
            setUsername(event.target.value);

        } else if (event.target.id === 'password') {
            setPassword(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Retrieve stored credentials from localStorage
        const storedUsername = JSON.parse(localStorage.getItem('username'));
        const storedPassword = JSON.parse(localStorage.getItem('password'));

        if (username === storedUsername && password === storedPassword) {
            // Handle successful login
            console.log('Login successful');
            window.location.href = '/home';
        } else {
            setErrorMessage('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className={styles.loginBox}>
            <h1>Login with</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.form}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>
            <h2 id="error-message" className={styles.error}>{errorMessage}</h2>
            <img src={orImage} alt="or" />
            <p onClick={toggleView}>Create Account</p>
        </div>
    );
};

export default LoginBox;