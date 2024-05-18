import { useState } from 'react';
import styles from './HomePage.module.css';
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import NewCardPopup from "./NewCardPopup";

const HomePage = () => {
    const [cards, setCards] = useState([
        { name: "Oscar Rodriguez", img: "https://via.placeholder.com/150", description: "Description" }
    ]);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddCard = (newCard) => {
        setCards([...cards, newCard]);
    };

    const handleCreateItineraryClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <section className={styles.container}>
            <Navbar onAddCard={handleCreateItineraryClick} />
            <Gallery cards={cards} />
            {showPopup && <NewCardPopup onAddCard={handleAddCard} onClose={handleClosePopup} />}
        </section>
    );
};

export default HomePage;