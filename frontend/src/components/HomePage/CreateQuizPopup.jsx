import { useState, useEffect } from 'react';
import { useQuizzesContext } from '../../hooks/useQuizzesContext';
import styles from './QuizPopup.module.css';

const CreateQuizPopup = ({ onClose }) => {
    const { dispatch } = useQuizzesContext();

    const [title, setTitle] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [option1, setOption1] = useState({ name: '', team: '', img: '', isCorrect: false });
    const [option2, setOption2] = useState({ name: '', team: '', img: '', isCorrect: false });
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleAddQuestion = (e) => {
        e.preventDefault();

        if (!questionText || !option1.name || !option1.team || !option1.img || !option2.name || !option2.team || !option2.img || (!option1.isCorrect && !option2.isCorrect)) {
            setEmptyFields(['questionText', 'option1', 'option2']);
            return;
        }

        const newQuestion = {
            question: questionText,
            options: [
                { ...option1, id: 1 },
                { ...option2, id: 2 },
            ]
        };

        setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
        setQuestionText('');
        setOption1({ name: '', team: '', img: '', isCorrect: false });
        setOption2({ name: '', team: '', img: '', isCorrect: false });
        setEmptyFields([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || questions.length === 0) {
            setEmptyFields(['title', 'questions']);
            return;
        }

        const quiz = { title, questions };

        try {
            const response = await fetch('/api/quizzes', {
                method: 'POST',
                body: JSON.stringify(quiz),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                setEmptyFields(json.emptyFields || []);
            } else {
                setEmptyFields([]);
                setError(null);
                setTitle('');
                setQuestions([]);
                dispatch({ type: 'CREATE_QUIZ', payload: json });
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }

        onClose();
    };

    const handleOptionChange = (setOption, field, value) => {
        setOption(prev => ({ ...prev, [field]: value }));
    };

    useEffect(() => {
        if (emptyFields.length > 0) {
            setEmptyFields([]);
        }
    }, [title, questionText, option1, option2]);

    const teams = [
        "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills",
        "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns",
        "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
        "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs",
        "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins",
        "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants",
        "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers",
        "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Commanders"
    ];

    return (
        <div className={styles.popup}>
            <form className={styles.popupContent} onSubmit={handleSubmit}>
                <h2>Create New Quiz</h2>

                <label>Quiz Title:</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={emptyFields.includes('title') ? styles.error : ''}
                />

                <label>Question:</label>
                <input
                    type="text"
                    onChange={(e) => setQuestionText(e.target.value)}
                    value={questionText}
                    className={emptyFields.includes('questionText') ? styles.error : ''}
                />

                <label>Option 1 Name:</label>
                <input
                    type="text"
                    onChange={(e) => handleOptionChange(setOption1, 'name', e.target.value)}
                    value={option1.name}
                    className={emptyFields.includes('option1') ? styles.error : ''}
                />

                <label>Option 1 Team:</label>
                <select
                    onChange={(e) => handleOptionChange(setOption1, 'team', e.target.value)}
                    value={option1.team}
                    className={emptyFields.includes('option1') ? styles.error : ''}
                >
                    {teams.map(team => <option key={team} value={team}>{team}</option>)}
                </select>

                <label>Option 1 Img Url:</label>
                <input
                    type="text"
                    onChange={(e) => handleOptionChange(setOption1, 'img', e.target.value)}
                    value={option1.img}
                    className={emptyFields.includes('option1') ? styles.error : ''}
                />

                <div className={styles.radioGroup}>
                    <input
                        type="radio"
                        name="isCorrect"
                        checked={option1.isCorrect}
                        onChange={() => {
                            handleOptionChange(setOption1, 'isCorrect', true);
                            handleOptionChange(setOption2, 'isCorrect', false);
                        }}
                    />
                    <label>Option 1 is Correct</label>
                </div>

                <label>Option 2 Name:</label>
                <input
                    type="text"
                    onChange={(e) => handleOptionChange(setOption2, 'name', e.target.value)}
                    value={option2.name}
                    className={emptyFields.includes('option2') ? styles.error : ''}
                />

                <label>Option 2 Team:</label>
                <select
                    onChange={(e) => handleOptionChange(setOption2, 'team', e.target.value)}
                    value={option2.team}
                    className={emptyFields.includes('option2') ? 'error' : ''}
                >
                    {teams.map(team => <option key={team} value={team}>{team}</option>)}
                </select>

                <label>Option 2 Img Url:</label>
                <input
                    type="text"
                    onChange={(e) => handleOptionChange(setOption2, 'img', e.target.value)}
                    value={option2.img}
                    className={emptyFields.includes('option2') ? 'error' : ''}
                />

                <div className={styles.radioGroup}>
                    <input
                        type="radio"
                        name="isCorrect"
                        checked={option2.isCorrect}
                        onChange={() => {
                            handleOptionChange(setOption2, 'isCorrect', true);
                            handleOptionChange(setOption1, 'isCorrect', false);
                        }}
                    />
                    <label>Option 2 is Correct</label>
                </div>

                <div className={styles.buttonGroup}>
                    <button type="button" onClick={handleAddQuestion}>Add Question</button>
                    <button type="submit" onClick={handleSubmit}>Submit Quiz</button>
                    <button type="button" className={styles.exit} onClick={onClose}>Exit</button>
                </div>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default CreateQuizPopup;
