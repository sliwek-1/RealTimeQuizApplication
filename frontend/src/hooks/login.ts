import React, {useState} from "react";
import config from "../config";

type LoginCretentials = {
    email: string,
    password: string,
}

const useLogin = () => {
    const [isLoading, setLoading] = useState(false);
    
    const login = async (data: LoginCretentials) => {
        try {
            setLoading(true);
            let request = await fetch(`http://${config.host}:${config.port}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            const response = await request.json();

            console.log(response)

        } catch (error) {
            console.error(error)
            throw error;
        } finally {
            setLoading(false)
        }
    }

    return {login, isLoading};
}

export { useLogin };