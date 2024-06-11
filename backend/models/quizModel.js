const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const optionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: [optionSchema]
});

const quizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: [questionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);