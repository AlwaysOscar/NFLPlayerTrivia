import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuizzesContext } from "../../hooks/useQuizzesContext";
import styles from './GamePage.module.css';

// components
import Navbar from './Navbar';
import Choice from './Choice';
import Question from './Question';

const GamePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const { quizId } = useParams();
    const { quizzes, dispatch } = useQuizzesContext();
    const [quiz, setQuiz] = useState(null);

    const fetchQuizzes = async () => {
        const response = await fetch(`/api/quizzes`);
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'SET_QUIZZES', payload: json });
        }
    };

    useEffect(() => {
        setShowResult(false);
        setSelectedOption(null);

        console.log('Quiz ID:', quizId);

        console.log('Fetching quizzes from API...');
        fetchQuizzes();
    }, [quizId, dispatch]);

    useEffect(() => {
        if (quizzes) {
            const selectedQuiz = quizzes.find((quizzes) => quizzes._id === quizId)
            console.log('Selected quiz:', selectedQuiz)
            setQuiz(selectedQuiz)
        }
    }, [quizzes, quizId]);

    const handleOptionClick = (option) => {
        if (showResult) {
            navigateToNextQuestion();
        } else {
            if (option.isCorrect) {
                setScore((prevScore) => prevScore + 1);
            }
            setShowResult(true);
            setSelectedOption(option);
        }
    };

    const navigateToNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            navigate('/end', { state: { score } });
        }
    };

    return (
        <section className={styles.container}>
            {quiz && (
                <Navbar key={quiz._id} value={quiz._id} currentQuestionIndex={currentQuestionIndex} totalQuestions={quiz.questions.length} />
            )}

            {quiz && quiz.questions.length > 0 && (
                <Question
                    value={quiz.questions[currentQuestionIndex]._id}
                    currentQuestionIndex={currentQuestionIndex}
                    question={quiz.questions[currentQuestionIndex].question}
                />
            )}

            {quiz && quiz.questions.length > 0 && (
                <Choice
                    value={quiz.questions[currentQuestionIndex]._id}
                    options={quiz.questions[currentQuestionIndex].options}
                    showResult={showResult}
                    selectedOption={selectedOption}
                    handleOptionClick={handleOptionClick}
                />
            )}

        </section>
    );
};

export default GamePage;