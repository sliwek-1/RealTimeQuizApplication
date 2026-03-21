import React, {useState} from "react";
import config from  "../config";


type registerCredentials = {
    name: String,
    surrname: String,
    login: String,
    email: String,
    password: String,
}


const useRegister = () => {
    const [isLoading, setLoading] = useState(false);
    

    const registerUser = async (data: registerCredentials) => {
        try {
            setLoading(true);

            let request: Response = await fetch(`http://${config.host}:${config.port}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const response = await request.json();

            console.log(response)

        } catch (error) {
            throw error
        } finally {
            setLoading(false);
        }
    }

    return {registerUser, isLoading}
}

export { useRegister };