import { createFileRoute } from "@tanstack/react-router";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks";
import { increment, incrementByAmount, decrement, decrementByAmount } from "../features/counter/counterSlice";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter);

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleIncrementByAmount = (amount: number) => {
        dispatch(incrementByAmount(amount));
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleDecrementByAmount = (amount: number) => {
        dispatch(decrementByAmount(amount))
    }

    return (
        <>

        </>
    )
}