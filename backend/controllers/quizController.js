const Quiz = require('../models/quizModel')
const mongoose = require('mongoose')

// GET all quizzess
const getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find({}).sort({ createAt: -1 });

  res.status(200).json(quizzes);
}

// Fetch a single quiz by name
const getQuiz = async (req, res) => {
  const { name } = req.params;

  try {
      const quiz = await Quiz.findOne({ title: name });
      if (!quiz) {
          return res.status(404).json({ error: 'Quiz not found' });
      }
      res.status(200).json(quiz);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// create a new quiz
const createQuiz = async (req, res) => {
  const { title, questions } = req.body;

  let emptyFields = []

  if (!title || !questions || questions.length === 0) {
    return res.status(400).json({ error: 'Please provide a title and questions for the quiz' });
  }

  // add doc to db
  try {
    const quiz = await Quiz.create({ title, questions });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a quiz by name
const deleteQuiz = async (req, res) => {
  const { name } = req.params;

  try {
      const quiz = await Quiz.findOneAndDelete({ title: name });
      if (!quiz) {
          return res.status(404).json({ error: 'Quiz not found' });
      }
      res.status(200).json({ message: 'Quiz deleted successfully', quiz });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// Update a quiz by name
const updateQuiz = async (req, res) => {
  const { name } = req.params;
  const { title, questions } = req.body;

  try {
      const quiz = await Quiz.findOneAndUpdate({ title: name }, { title, questions }, { new: true });
      if (!quiz) {
          return res.status(404).json({ error: 'Quiz not found' });
      }
      res.status(200).json(quiz);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getQuizzes,
  getQuiz,
  createQuiz,
  deleteQuiz,
  updateQuiz
}