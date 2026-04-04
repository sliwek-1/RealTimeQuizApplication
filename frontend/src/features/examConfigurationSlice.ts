import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Questions, ExamRules, ExamState, SummaryScreen, AddAnswerToStorage, RemoveAnswerFromStorage, StartScreen, CreateExam } from '../types/creatorPanelTypes';

export const initialState: ExamState = {
    title: "",
    description: "",
    status: "private",
    questions: [],
    examRules: {
        examTimeBy: "exam",
        examTime: 60,
        punishmentMethod: "Off",
        chances: 5,
        passRate: 50
    },
    startScreen: {
        content: "",
        isAnonymous: false,
        demandName: true,
        demandSurname: false,
        demandEmail: false
    }, 
    summaryScreen: {
        happyEnding: "",
        badEnding: "",
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
        addExamToStorage: (state, action: PayloadAction<CreateExam>) => {
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
        setStartScreen: (state, action: PayloadAction<StartScreen>) => {
            state.startScreen.content = action.payload.content;
            state.startScreen.demandEmail = action.payload.demandEmail;
            state.startScreen.demandName = action.payload.demandName;
            state.startScreen.demandSurname = action.payload.demandSurname;
        },
        removeStartScreen: (state) => {
            state.startScreen.content = "";
            state.startScreen.demandEmail = false;
            state.startScreen.demandName = true;
            state.startScreen.demandSurname = false;
        },
        setExamRules: (state, action: PayloadAction<ExamRules>) => {
            state.examRules.examTime = action.payload.examTime;
            state.examRules.punishmentMethod = action.payload.punishmentMethod;
            state.examRules.chances = action.payload.chances;
            state.examRules.examTime = action.payload.examTime;
        },
        removeExamRules: (state) => {
            state.examRules.punishmentMethod = "Off";
            state.examRules.chances = 5;
            state.examRules.examTime = 60;
            state.examRules.examTimeBy = "exam";
        },
        setSummaryScreen: (state, action: PayloadAction<SummaryScreen>) => {
            state.summaryScreen.happyEnding = action.payload.happyEnding;
            state.summaryScreen.badEnding = action.payload.badEnding;
            state.summaryScreen.resultInPoints = action.payload.resultInPoints;
            state.summaryScreen.resultInPercentage = action.payload.resultInPercentage;
            state.summaryScreen.avgGroupResult = action.payload.avgGroupResult;
            state.summaryScreen.informationAboutResult = action.payload.informationAboutResult;
        },
        removeSummaryScreen: (state) => {
            state.summaryScreen.happyEnding = "";
            state.summaryScreen.badEnding = "";
            state.summaryScreen.resultInPoints = true;
            state.summaryScreen.resultInPercentage = false;
            state.summaryScreen.avgGroupResult = false;
            state.summaryScreen.informationAboutResult = true;
        },
        terminateExamState: () => initialState
    }
})

export const { addExamToStorage, removeExamFromStorage, addQuestionToStorage, removeQuestionFromStorage, 
    cleanQuestionStorage, addAnswerToStorage, removeAnswerFromStorage, setExamRules, setStartScreen, 
    setSummaryScreen, removeExamRules, removeStartScreen, removeSummaryScreen } = examConfigurationSlice.actions;

export default examConfigurationSlice.reducer;