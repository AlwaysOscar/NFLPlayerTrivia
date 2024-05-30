import styles from './Category.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const canProceed = selectedCategory !== null;
    return (
        <section className={styles.container}>

            <img
                src={"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0824%2Fnfl_rank_16x9.jpg"}
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