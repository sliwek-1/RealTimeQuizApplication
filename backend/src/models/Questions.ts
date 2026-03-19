import mongoose from "mongoose";
const { Schema, model } = mongoose;

const questionsSchema = new Schema({
    quizId: Number,
    questions: [
        {
            question: { type: String, required: true },
            questionImg: String,
            questionVideo: String,
            questionCategory: String,
            questionType: String,
            answers: [{
                text: { type: String, required: true},
                isCorrect: Boolean,
            }]
        }
    ]
});


export default questionsSchema;