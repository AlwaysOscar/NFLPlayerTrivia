import { Link } from 'react-router-dom';
import homeIcon from "../../assets/game/home_icon.png";
import nflLogo from "../../assets/game/nfl_logo.png";
import styles from './Navbar.module.css';


function Navbar({currentQuestionIndex}) {
    return (
        <nav id="navbar" className={styles.nav}>
            <Link to="/">
                <img src={homeIcon} alt="Home Icon" className={styles.homeImg} />
            </Link>
            <img src={nflLogo} alt="NFL Logo" className={styles.logoImg} />
            <div className={styles.scoreBoard}>
                <h1>{currentQuestionIndex + 1} / {questionsData.length}</h1>
            </div>
        </nav>
    );
}

export default Navbar;