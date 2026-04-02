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
        chances?: number
    },
    startScreen: {
        content: String,
        isAnonymous?: boolean,
        demandName?: boolean,
        demandSurname?: boolean,
        demandEmail?: boolean
    }, 
    summaryScreen: {
        resultInPoints?: boolean,
        resultInPercentage?: boolean,
        informationAboutResult?: boolean,
        avarageGroupResult?: boolean
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
    },
    startScreen: {
        content: "",
        isAnonymous: false,
        demandName: true,
        demandSurname: false,
        demandEmail: false
    }, 
    summaryScreen: {
        resultInPoints: true,
        resultInPercentage: false,
        informationAboutResult: true,
        avarageGroupResult: false
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
            
        },
        removeExamRules: (state) => {
            
        },
        setSummaryScreen: (state, action: PayloadAction<ExamState>) => {

        },
        removeSummaryScreen: (state) => {
            
        },
        terminateExamState: (state) => {

        }
    }
})

export const {addExamToStorage, removeExamFromStorage} = examConfigurationSlice.actions;

export default examConfigurationSlice.reducer;