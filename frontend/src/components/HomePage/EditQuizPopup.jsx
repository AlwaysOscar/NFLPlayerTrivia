import { useState, useEffect } from 'react';
import { useQuizzesContext } from '../../hooks/useQuizzesContext';
import styles from './QuizPopup.module.css';

const EditQuizPopup = ({ onClose }) => {
    const { dispatch } = useQuizzesContext();
    const [quizName, setQuizName] = useState('');
    const [quizDetails, setQuizDetails] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchQuiz = async () => {
        try {
            const response = await fetch(`/api/quizzes/${encodeURIComponent(quizName)}`);
            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                setQuizDetails(json);
                setError(null);
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    };

    const handleEditQuiz = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/quizzes/${quizDetails._id}`, {
                method: 'PATCH',
                body: JSON.stringify(quizDetails),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                dispatch({ type: 'UPDATE_QUIZ', payload: json });
                onClose();
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    };

    useEffect(() => {
        if (quizDetails) {
            // Optional: Populate form fields with fetched quiz details for editing
        }
    }, [quizDetails]);

    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <h2>Edit Quiz</h2>
                <label>Enter the name of the quiz to edit:</label>
                <input
                    type="text"
                    value={quizName}
                    onChange={(e) => setQuizName(e.target.value)}
                    className={styles.input}
                />
                <button onClick={handleFetchQuiz}>Fetch Quiz Details</button>

                {quizDetails && (
                    <form onSubmit={handleEditQuiz}>
                        <label>Quiz Title:</label>
                        <input
                            type="text"
                            value={quizDetails.title}
                            onChange={(e) => setQuizDetails({ ...quizDetails, title: e.target.value })}
                            className={styles.input}
                        />
                        {quizDetails.questions.map((q, idx) => (
                            <div key={idx}>
                                <label>Question {idx + 1}:</label>
                                <input
                                    type="text"
                                    value={q.question}
                                    onChange={(e) => {
                                        const newQuestions = [...quizDetails.questions];
                                        newQuestions[idx].question = e.target.value;
                                        setQuizDetails({ ...quizDetails, questions: newQuestions });
                                    }}
                                    className={styles.input}
                                />
                                {q.options.map((opt, optIdx) => (
                                    <div key={optIdx}>
                                        <label>Option {optIdx + 1}:</label>
                                        <input
                                            type="text"
                                            value={opt.name}
                                            onChange={(e) => {
                                                const newOptions = [...q.options];
                                                newOptions[optIdx].name = e.target.value;
                                                const newQuestions = [...quizDetails.questions];
                                                newQuestions[idx].options = newOptions;
                                                setQuizDetails({ ...quizDetails, questions: newQuestions });
                                            }}
                                            className={styles.input}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                        <button type="submit">Update Quiz</button>
                    </form>
                )}

                <div className={styles.buttonGroup}>
                    <button onClick={onClose}>Cancel</button>
                </div>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default EditQuizPopup;