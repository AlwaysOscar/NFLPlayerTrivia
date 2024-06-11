import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizzesContext } from "../../hooks/useQuizzesContext"
import styles from './Body.module.css';
import title from "../../assets/home/title.png";

const Body = () => {
    const { quizzes, dispatch } = useQuizzesContext()

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await fetch('/api/quizzes')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_QUIZZES', payload: json })
            }
        }

        fetchQuizzes()
    }, [dispatch])

    const [selectedQuiz, setSelectedQuiz] = useState('');
    const navigate = useNavigate();

    const handleQuizSelect = (e) => {
        const selectedQuizId = e.target.value;
        setSelectedQuiz(selectedQuizId);
        console.log("Selected quiz:", selectedQuizId);
    };

    const canProceed = selectedQuiz !== '';

    return (
        <section className={styles.container}>
            <img className={styles.titleImg} src={title} alt="NFL Player Trivia Game" />
            <img
                src={"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0824%2Fnfl_rank_16x9.jpg"}
                alt="NFL Player Display"
                className={styles.displayImg}
            />

            <select
                value={selectedQuiz}
                onChange={handleQuizSelect}
            >
                <option value="" disabled>Select Quiz</option>
                {quizzes && quizzes.map(quiz => (
                    <option key={quiz._id} value={quiz._id}>{quiz.title}</option>
                ))}
            </select>


            <Link
                to={canProceed ? `/game/${selectedQuiz}` : "#"}
                className={`${styles.playBtn} ${canProceed ? '' : styles.disabled}`}
            >
                Play Now
            </Link>

        </section>
    );
};

export default Body;