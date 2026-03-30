import React, {useState} from "react";
import config from "../../config";

type Input = {
    title: string,
    description: string,
    status: string,
    isAccountRequired: boolean,
    isWarnings: boolean,
    answerTime: number,
    examTime: number,
    passRate?: number
}

export function useCreateSession() {
    const [isLoading, setLoading] = useState(false);

    const createSession = async (data: Input) => {
        setLoading(true);
        try {
            let req = await fetch(`http://${config.host}:${config.port}/api/session/create`, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(data)
            });

            let res = await req.json();
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return {isLoading, createSession}
}