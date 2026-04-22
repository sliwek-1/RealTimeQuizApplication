import { useState } from "react";
import { useDispatch } from "react-redux";
import config from "../../config";

export function useSetupQuiz() {
    const [isLoading, setLoading] = useState<Boolean>(false);
    const dispatch = useDispatch();

    const setup = async (data: any) => {
        try {
            setLoading(true);
            
            const req = await fetch(`http://${config.host}:${config.port}/api/quiz/setup-quiz`,
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include'
                }
            );

            const res = await req.json();

            console.log(res);

        } catch (error) {
            throw error
        } finally {
            setLoading(false);
        }
    }

    return {setup, isLoading}
}
