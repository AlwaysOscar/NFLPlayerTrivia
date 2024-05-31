import styles from './Navbar.module.css';


function Navbar({onCreateQuiz}) {
    return (
        <nav>
            <div className={styles.buttons}>
                <button>Edit Quiz</button>
                <p style={{ color: '#fff', fontSize: '20px', userSelect: 'none' }}>|</p>
                <button onClick={onCreateQuiz}>Create Quiz</button>
            </div>
        </nav>
    );
}

export default Navbar;