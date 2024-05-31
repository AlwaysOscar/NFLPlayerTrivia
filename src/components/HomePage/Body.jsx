import styles from './Body.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import title from "../../assets/home/title.png";

const Body = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const handleQuizChange = (event) => {
        setSelectedQuiz(event.target.value);
    };

    const canProceed = selectedQuiz !== null;
    return (
        <section className={styles.container}>
            <img className={styles.titleImg} src={title} alt="NFL Player Trivia Game" />
            <img
                src={"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0824%2Fnfl_rank_16x9.jpg"}
                alt="NFL Player Display"
                className={styles.displayImg}
            />

            <select
                value={selectedQuiz || ''}
                onChange={handleQuizChange}
                className={styles.categoryDropdown}
            >
                <option value="" disabled>Select Quiz</option>
                <option value="quarterbacks">Quarterbacks</option>
            </select>

            <Link
                to={canProceed ? { pathname: '/game', state: { selectedQuiz } } : "#"}
                className={`${styles.playBtn} ${canProceed ? '' : styles.disabled}`}
            >
                Play Now
            </Link>
        </section>

    );
};

export default Body;