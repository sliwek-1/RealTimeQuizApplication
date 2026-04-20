import { useState } from "react";
import { useDispatch } from "react-redux";
import config from "../../config";

export function useSetupQuiz() {
    const [isLoading, setLoading] = useState<Boolean>(false);
    const dispatch = useDispatch();

    const useSetup = async () => {
        try {
            setLoading(true);
            
            const req = await fetch(`http://${config.host}:${config.port}/`);

            const res = await req.json();

            console.log(res);


        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
}
