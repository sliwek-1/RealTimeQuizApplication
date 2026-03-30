import React, {useState} from "react";

type Input = {
    title: string,
    description: string,
    status: string,
    isAccountRequired: boolean,
    isWarnings: boolean,
    answerTime: number,
    examTime: number,
    passRate: number
}

export function useCreateSession() {
    const [isLoading, setLoading] = useState(false);

    const createSession = (data: Input) => {
        setLoading(true);
        try {
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return {isLoading, createSession}
}