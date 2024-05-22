import styles from './EndPage.module.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import logo from "../../assets/end/nfl_logo.png";
import bg1 from "../../assets/end/end_bg1.png";
import bg2 from "../../assets/end/end_bg2.png";

export const EndPage = () => {
    const location = useLocation();
    const score = location.state ? location.state.score : null;
    return (
        <section className={styles.container}>
            <img
                src={logo}
                alt="NFL Logo"
                className={styles.logoImg}
            />
            
            <h1>Your Score: {score}</h1>
            <h1>Thank you for playing NFL Player Trivia</h1>
            <Link to="/" className={styles.playAgainBtn}>Play Again</Link>

            <img
                src={bg1}
                alt="NFL Logo"
                className={styles.topLeftBgImg}
            />
            <img
                src={bg2}
                alt="NFL Logo"
                className={styles.bottomRightBgImg}
            />
        </section>
    )
}

export default EndPage;