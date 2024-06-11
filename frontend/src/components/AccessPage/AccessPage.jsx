import React, { useState } from 'react';
import styles from './AccessPage.module.css';
import Background from "./Background";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";

const AccessPage = () => {
    const [view, setView] = useState('login');

    const toggleView = () => {
        setView((prevView) => (prevView === 'login' ? 'register' : 'login'));
    };

    return (
        <section className={styles.container}>
            <Background />
            {view === 'login' ? (
                <LoginBox toggleView={toggleView} />
            ) : (
                <RegisterBox toggleView={toggleView} />
            )}
        </section>
    );
};

export default AccessPage;