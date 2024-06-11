import styles from './Background.module.css';
import title from "../../assets/login/title.png";

const Background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.titleBox}>
                <img className={styles.titleImg}src={title} alt="NFL Player Trivia Game" />
            </div>
        </div>
    );
};

export default Background;