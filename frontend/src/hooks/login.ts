import React, {useState} from "react";
import config from "../config";
import { useNavigate } from "@tanstack/react-router";
import { useDispatch } from "react-redux";
import { addUserToStorage } from "../features/userSlice";

type LoginCretentials = {
    email: string,
    password: string,
}

const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    
    const login = async (data: LoginCretentials) => {
        try {
            setLoading(true);
            let request: Response = await fetch(`http://${config.host}:${config.port}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            const response = await request.json();
            console.log(response)
            const userData = {
                name: response.name,
                surrname: response.surrname,
                login: response.login,
                email: response.email,
                uniqueId: response.id,
            }

            if(request.ok && response.message == "Logged in") {
                dispatch(addUserToStorage(userData));
                navigate({to: '/'});
            } 

        } catch (error) {
            throw error;
        } finally {
            setLoading(false)
        }
    }

    return { login, isLoading };
}

export { useLogin };