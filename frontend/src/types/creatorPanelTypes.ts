export type PunishmentMethod = "Off" | "sendWarnings" | "sendWarningsAndKick";
export type Choice = "singleChoice" | "multiChoice";

export interface Answers {
    id: string,
    content: string,
    isCorrect: boolean,
}

export interface AddAnswerToStorage {
    questionId: string,
    answer: Answers
}

export interface RemoveAnswerFromStorage {
    questionId: string,
    answerId: string,
}

export interface ExamRules {
    answerTime: number,
    examTime: number,
    punishmentMethod: PunishmentMethod,
    chances?: number,
    isExamTime: boolean,
    isAnswerTime: boolean,
    passRate: number
}

export interface SummaryScreen {
    happyEnding: string,
    badEnding: string,
    resultInPoints?: boolean,
    resultInPercentage?: boolean,
    informationAboutResult?: boolean,
    avgGroupResult?: boolean,
}

export interface Questions {
    id: string
    question: string,
    type: Choice,
    answers: Answers[],
    questionWeight: number,
}

export interface StartScreen {
    content: String,
    isAnonymous?: boolean,
    demandName?: boolean,
    demandSurname?: boolean,
    demandEmail?: boolean
}

export interface CreateExam {
    title: string,
    description: string,
    status: "public" | "private",
}

export interface ExamState {
    title: string,
    description: string,
    status: "public" | "private",
    questions: Questions[],
    examRules: ExamRules,
    startScreen: StartScreen, 
    summaryScreen: SummaryScreen
}