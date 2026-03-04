import { createFileRoute } from "@tanstack/react-router";
import FrontPage from "../components/frontPage";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <FrontPage />
        </>
    )
}