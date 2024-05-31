import { useState } from 'react';
import styles from './HomePage.module.css';
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import CreateQuizPopup from "./CreateQuizPopup";

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleCreateQuizClick = () => {
        setShowPopup(true);
        console.log("create popup open");
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <section className={styles.container}>
            <Navbar onCreateQuiz={handleCreateQuizClick}/>
            <Body/>
            <Footer />
            {showPopup && <CreateQuizPopup onClose={handleClosePopup} />}
        </section>
    );
};

export default HomePage;