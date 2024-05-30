import styles from './Question.module.css';

const Question = ({ currentQuestionIndex, question }) => {
    return (
        <div className={styles.container}>
            <h1>Question #{currentQuestionIndex + 1}</h1>
            <p>{question}</p>
        </div>
    );
};

export default Question;