import styles from './Navbar.module.css';

function Navbar({ onAddCard }) {
    return (
        <div className={styles.navbar}>
            <h1>Zotinerary</h1>
            <div className={styles.buttons}>
                <button className={styles.mainButton} onClick={onAddCard}>Create Itinerary</button>
            </div>
        </div>
    );
}

export default Navbar;