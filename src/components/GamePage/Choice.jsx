import styles from './Choice.module.css';

const Choice = ({currentQuestion, showResult, selectedOption, handleOptionClick }) => {
    return (
        <div className={styles.body}>
            {currentQuestion.options.map((option) => (
                <div
                    key={option.id}
                    className={`${styles.choice} 
                    ${showResult && option.isCorrect ? styles.correct : ''} 
                    ${showResult && selectedOption && !option.isCorrect && option === selectedOption ? styles.wrong : ''}`}
                    onClick={() => handleOptionClick(option)}
                >
                    <img
                        src={option.logo}
                        alt="Team Logo Image"
                        className={styles.teamLogoImg}
                    />
                    <img
                        src={option.img}
                        alt="Player Image"
                        className={option.id % 2 ? styles.leftPlayerImg : styles.rightPlayerImg}
                    />
                    <h1>{option.name}</h1>
                </div>
            ))}
            <div className={styles.orIcon}> OR </div>
        </div>
    );
};

export default Choice;