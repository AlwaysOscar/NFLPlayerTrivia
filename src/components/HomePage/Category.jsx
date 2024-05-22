import styles from './Category.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import defaultCategory from "../../assets/home/default_category.png";


const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const canProceed = selectedCategory !== null;
    return (
        <section className={styles.container}>

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
        </section>

    );
};

export default Category;