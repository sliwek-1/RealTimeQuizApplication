import type { ExamState, Questions } from "../types/creatorPanelTypes";
import { initialState } from "../features/examConfigurationSlice";

const EXAM_CONFIG_STORAGE_KEY = "examConfig";
localStorage.setItem(EXAM_CONFIG_STORAGE_KEY, JSON.stringify(initialState));

export const persist = {
    saveConfigExam: (state: ExamState) => {
        let rawData = localStorage.getItem(EXAM_CONFIG_STORAGE_KEY)
        if(rawData !== null) {
            try {
                let prevData: ExamState = JSON.parse(rawData)
                const newData = {...prevData, state}
                localStorage.setItem(EXAM_CONFIG_STORAGE_KEY, JSON.stringify(newData));    
            } catch (error) {
                console.log(error)
            }
        }
        localStorage.setItem(EXAM_CONFIG_STORAGE_KEY, JSON.stringify(state));
    },
    saveQuestionsExam: (state: Questions) => {
        let rawData = localStorage.getItem(EXAM_CONFIG_STORAGE_KEY);
        if(rawData !== null) {
            let prevData: ExamState = JSON.parse(rawData);
            let prevQuestions: Questions[] = prevData.questions;
            let newQuesions: Questions[] = [...prevQuestions, state]
            
            let newData: ExamState = {...prevData, questions: newQuesions};
            localStorage.setItem(EXAM_CONFIG_STORAGE_KEY, JSON.stringify(newData));
            
        }
    }
}