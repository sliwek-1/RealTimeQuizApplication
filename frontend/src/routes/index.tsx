import { createFileRoute } from "@tanstack/react-router";
import FrontPage from "../components/frontPage";
import config from "../config";
import { store } from "../store";
import { removeUserFromStorage, addUserToStorage } from "../features/counter/userSlice";

export const Route = createFileRoute('/')({
    component: Index,
    loader: async ({ context }) => {
        const req = await fetch(`http://${config.host}:${config.port}/api/whoami`, {
            method: 'post',
            credentials: 'include'
        });

        const res = await req.json();
        //console.log(res.userData)
        store.dispatch(addUserToStorage(res.userData));

        if(!req.ok) {
            store.dispatch(removeUserFromStorage());
            return { redirect: '/login' }
        };
    }
})

function Index() {
    return (
        <>
            <FrontPage />
        </>
    )
}