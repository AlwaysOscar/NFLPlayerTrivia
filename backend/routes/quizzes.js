const express = require('express');
const {
    getQuizzes, 
    getQuiz, 
    createQuiz, 
    deleteQuiz, 
    updateQuiz
} = require('../controllers/quizController.js');

const router = express.Router();

// GET all quizzes
router.get('/', getQuizzes);

// GET a single quiz by name
router.get('/:name', getQuiz);

// POST a new quiz
router.post('/', createQuiz);

// DELETE a quiz by name
router.delete('/:name', deleteQuiz);

// UPDATE a quiz by name
router.patch('/:name', updateQuiz);

module.exports = router;