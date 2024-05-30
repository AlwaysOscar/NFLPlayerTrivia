import styles from './Navbar.module.css';
import title from "../../assets/home/title.png";


function Navbar() {
    return (
        <nav>
            <img className={styles.titleImg} src={title} alt="NFL Player Trivia Game" />
            <div className={styles.buttons}>
                <button>Edit Category</button>
                <p style={{ color: '#fff', fontSize: '20px', userSelect: 'none' }}>|</p>
                <button>Create Category</button>
            </div>
        </nav>
    );
}

export default Navbar;