import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './HomePage.module.css';
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewCardPopup from "./NewCardPopup";
import title from "../../assets/home/title.png";
import defaultCategory from "../../assets/home/default_category.png";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const canProceed = selectedCategory !== null;

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
            <img
                src={title}
                alt="NFL Player Trivia Game Title"
                className={styles.titleImg}
            />
            <img
                src={defaultCategory}
                alt="NFL Player Display"
                className={styles.displayImg}
            />

            <select
                value={selectedCategory || ''}
                onChange={handleCategoryChange}
                className={styles.categoryDropdown}
            >
                <option value="" disabled>Select category</option>
                <option value="quarterbacks">Quarterbacks</option>
            </select>

            <Link
                to={canProceed ? { pathname: '/game', state: { selectedCategory } } : "#"}
                className={`${styles.playBtn} ${canProceed ? '' : styles.disabled}`}
            >
                Play Now
            </Link>
            
            <Footer />
        </section>
    );
};

export default HomePage;