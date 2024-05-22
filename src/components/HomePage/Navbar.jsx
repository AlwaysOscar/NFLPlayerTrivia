import styles from './Navbar.module.css';
import title from "../../assets/home/title.png";


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.titleBox}>
                <img className={styles.titleImg} src={title} alt="NFL Player Trivia Game" />
            </div>
            <div className={styles.buttons}>
                <button className={styles.categoryButton}>Create Category</button>
            </div>
        </div>
    );
}

export default Navbar;