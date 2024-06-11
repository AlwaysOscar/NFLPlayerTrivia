import { useState } from 'react';
import styles from './HomePage.module.css';

// components
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import CreateQuizPopup from './CreateQuizPopup';
import DeleteQuizPopup from './DeleteQuizPopup';
import EditQuizPopup from './EditQuizPopup';

const HomePage = () => {
    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [selectedQuizName, setSelectedQuizName] = useState('');

    const handleDeleteQuizClick = () => {
        setShowDeletePopup(true);
    };

    const handleCloseDeletePopup = () => {
        setShowDeletePopup(false);
    };

    const handleCreateQuizClick = () => {
        setShowCreatePopup(true);
    };

    const handleCloseCreatePopup = () => {
        setShowCreatePopup(false);
    };

    const handleEditQuizClick = () => {
        setShowEditPopup(true);
    };

    const handleCloseEditPopup = () => {
        setShowEditPopup(false);
    };

    return (
        <section className={styles.container}>
            <Navbar
                onCreateQuiz={handleCreateQuizClick}
                onDeleteQuiz={handleDeleteQuizClick}
                onEditQuiz={handleEditQuizClick}
            />
            <Body />
            <Footer />
            {showCreatePopup && <CreateQuizPopup onClose={handleCloseCreatePopup} />}
            {showDeletePopup && <DeleteQuizPopup onClose={handleCloseDeletePopup} />}
            {showEditPopup && <EditQuizPopup onClose={handleCloseEditPopup} />}
        </section>
    );
};

export default HomePage;