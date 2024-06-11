import { useState } from 'react';
import { useQuizzesContext } from '../../hooks/useQuizzesContext';
import styles from './QuizPopup.module.css';

const DeleteQuizPopup = ({ onClose }) => {
    const { dispatch } = useQuizzesContext();
    const [quizName, setQuizName] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        if (confirmation.toLowerCase() === 'delete') {
            try {
                const response = await fetch(`/api/quizzes/${encodeURIComponent(quizName)}`, {
                    method: 'DELETE',
                });

                const json = await response.json();

                if (!response.ok) {
                    setError(json.error);
                } else {
                    setError(null);
                    dispatch({ type: 'DELETE_QUIZ', payload: json.quiz });
                    onClose();
                }
            } catch (error) {
                setError('Something went wrong. Please try again.');
            }
        } else {
            setConfirmation('');
        }
    };

    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <h2>Delete Quiz</h2>
                <label>Enter the name of the quiz to delete:</label>
                <input
                    type="text"
                    value={quizName}
                    onChange={(e) => setQuizName(e.target.value)}
                    className={styles.input}
                />
                <label>To confirm, type 'DELETE' in all caps:</label>
                <input
                    type="text"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                    className={styles.input}
                />
                <div className={styles.buttonGroup}>
                    <button onClick={handleDelete}>Delete Quiz</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default DeleteQuizPopup;