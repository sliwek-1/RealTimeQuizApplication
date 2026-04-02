import { preconnect } from "react-dom";
import type { ExamState } from "../types/creatorPanelTypes";

const EXAM_CONFIG_STORAGE_KEY = "examConfig";

export const persist = {
    saveConfigExam: (state: ExamState) => {
        let rawData = sessionStorage.getItem(EXAM_CONFIG_STORAGE_KEY)
        if(rawData !== null) {
            try {
                let prevData: ExamState = JSON.parse(rawData)
                const newData = {...prevData, state}
                sessionStorage.setItem(EXAM_CONFIG_STORAGE_KEY, JSON.stringify(newData));    
            } catch (error) {
                console.log(error)
            }
        }
        sessionStorage.setItem(EXAM_CONFIG_STORAGE_KEY, JSON.stringify(state));
    }
}