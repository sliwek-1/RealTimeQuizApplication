import React, {useState} from "react";

type LoginCretentials = {
    email: string,
    password: string,
}

const useLogin = () => {
    const [isLoading, setLoading] = useState(false);
    
    const login = async (data: LoginCretentials) => {
        
    }
}