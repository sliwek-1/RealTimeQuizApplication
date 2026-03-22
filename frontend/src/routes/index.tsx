import { createFileRoute } from "@tanstack/react-router";
import FrontPage from "../components/frontPage";
import config from "../config";

export const Route = createFileRoute('/')({
    component: Index,
    loader: async ({ context }) => {
        const req = await fetch(`http://${config.host}:${config.port}/api/whoami/`, {
            credentials: 'include'
        });

        const res = await req.json();
    }
})

function Index() {
    return (
        <>
            <FrontPage />
        </>
    )
}