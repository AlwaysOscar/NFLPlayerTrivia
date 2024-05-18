import React, { useState } from 'react';
import styles from './Box.module.css';
import orImage from '../../assets/login/or.png';

const RegisterBox = ({ toggleView }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username.trim() !== '' && password.trim() !== '') {
            localStorage.setItem('username', JSON.stringify(username));
            localStorage.setItem('password', JSON.stringify(password));
            toggleView();
        } 
        else {
            setErrorMessage('Please fill out all fields.');
        }
    };

    return (
        <div className={styles.loginBox}>
            <h1>Register with</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>

                <div className={styles.form}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">Register</button>
            </form>
            <h2 id="error-message" className={styles.error}>{errorMessage}</h2>
            <img src={orImage} alt="or" />
            <p onClick={toggleView}>Already have an account? Login</p>
        </div>
    );
};

export default RegisterBox;