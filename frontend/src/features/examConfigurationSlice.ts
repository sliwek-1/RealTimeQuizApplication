import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react';

type punishmentMethod = "Off" | "sendWarnings" | "sendWarningsAndKick";

interface Answers {
    id: string,
    content: string,
    isCorrect: Boolean,
}

interface AddAnswerToStorage {
    questionId: string,
    answer: Answers
}

interface RemoveAnswerFromStorage {
    questionId: string,
    answerId: string,
}

interface Questions {
    id: string
    question: string,
    type: "multiChoice" | "singleChoice",
    answers: Answers[],
    questionWeight: number,
}

interface ExamState {
    title: string,
    description: string,
    status: "public" | "private",
    questions: Questions[],
    examRules: {
        answerTime: number,
        examTime: number,
        punishmentMethod: punishmentMethod,
        chances?: number,
        isExamTime: boolean,
        isAnswerTime: boolean
    },
    startScreen: {
        content: String,
        isAnonymous?: boolean,
        demandName?: boolean,
        demandSurname?: boolean,
        demandEmail?: boolean
    }, 
    summaryScreen: {
        content: string,
        resultInPoints?: boolean,
        resultInPercentage?: boolean,
        informationAboutResult?: boolean,
        avgGroupResult?: boolean
    }
}

const initialState: ExamState = {
    title: "",
    description: "",
    status: "private",
    questions: [],
    examRules: {
        answerTime: 30,
        examTime: 60,
        punishmentMethod: "Off",
        chances: 5,
        isExamTime: true,
        isAnswerTime: false
    },
    startScreen: {
        content: "",
        isAnonymous: false,
        demandName: true,
        demandSurname: false,
        demandEmail: false
    }, 
    summaryScreen: {
        content: "",
        resultInPoints: true,
        resultInPercentage: false,
        informationAboutResult: true,
        avgGroupResult: false
    }
}

export const examConfigurationSlice = createSlice({
    name: 'exam',
    initialState,
    reducers: {
        addExamToStorage: (state, action: PayloadAction<ExamState>) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.status = action.payload.status;
        },
        removeExamFromStorage: (state) => {
            state.title = "";
            state.description = "";
            state.status = "private";
        },
        addQuestionToStorage: (state, action: PayloadAction<Questions>) => {
            state.questions.push(action.payload)
        },
        removeQuestionFromStorage: (state, action: PayloadAction<string>) => {
            state.questions = state.questions.filter((question) => (
                question.id !== action.payload
            ))
        },
        cleanQuestionStorage: (state) => {
            state.questions = [];
        },
        addAnswerToStorage: (state, action: PayloadAction<AddAnswerToStorage>) => {
            const question = state.questions.find((question) => (
                question.id == action.payload.questionId
            ));

            if(question) question.answers.push(action.payload.answer);
        },
        removeAnswerFromStorage: (state, action: PayloadAction<RemoveAnswerFromStorage>) => {
            const question = state.questions.find((question) => (
                question.id == action.payload.questionId
            ));

            if(question) {
                question.answers = question.answers.filter((answer) => (
                    answer.id !== action.payload.answerId
                ));
            }
        },
        setStartScreen: (state, action: PayloadAction<ExamState>) => {
            state.startScreen.content = action.payload.startScreen.content;
            state.startScreen.demandEmail = action.payload.startScreen.demandEmail;
            state.startScreen.demandName = action.payload.startScreen.demandName;
            state.startScreen.demandSurname = action.payload.startScreen.demandSurname;
        },
        removeStartScreen: (state) => {
            state.startScreen.content = "";
            state.startScreen.demandEmail = false;
            state.startScreen.demandName = true;
            state.startScreen.demandSurname = false;
        },
        setExamRules: (state, action: PayloadAction<ExamState>) => {
            state.examRules.answerTime = action.payload.examRules.answerTime;
            state.examRules.examTime = action.payload.examRules.examTime;
            state.examRules.punishmentMethod = action.payload.examRules.punishmentMethod;
            state.examRules.chances = action.payload.examRules.chances;
            state.examRules.isExamTime = action.payload.examRules.isExamTime;
            state.examRules.isAnswerTime = action.payload.examRules.isAnswerTime;
        },
        removeExamRules: (state) => {
            state.examRules.answerTime = 30;
            state.examRules.examTime = 60;
            state.examRules.punishmentMethod = "Off";
            state.examRules.chances = 5;
            state.examRules.isExamTime = true;
            state.examRules.isAnswerTime = false;
        },
        setSummaryScreen: (state, action: PayloadAction<ExamState>) => {
            state.summaryScreen.content = action.payload.summaryScreen.content;
            state.summaryScreen.resultInPoints = action.payload.summaryScreen.resultInPoints;
            state.summaryScreen.resultInPercentage = action.payload.summaryScreen.resultInPercentage;
            state.summaryScreen.avgGroupResult = action.payload.summaryScreen.avgGroupResult;
            state.summaryScreen.informationAboutResult = action.payload.summaryScreen.informationAboutResult;
        },
        removeSummaryScreen: (state) => {
            state.summaryScreen.content = "";
            state.summaryScreen.resultInPoints = true;
            state.summaryScreen.resultInPercentage = false;
            state.summaryScreen.avgGroupResult = false;
            state.summaryScreen.informationAboutResult = true;
        },
        terminateExamState: (state) => {

        }
    }
})

export const {addExamToStorage, removeExamFromStorage} = examConfigurationSlice.actions;

export default examConfigurationSlice.reducer;