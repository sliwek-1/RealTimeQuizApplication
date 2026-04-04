import { createFileRoute } from '@tanstack/react-router'
import { QuestionsList } from '../../../components/quiz/addQuestionTab/questionsList'
import { store } from '../../../store'

export const Route = createFileRoute('/quiz/question/list')({
  component: RouteComponent,
  loader: ({ params }) => {
    const questions = store.getState();
    return {questions}
  }
})

function RouteComponent() {
  const questions = Route.useLoaderData();
  return <QuestionsList />
}
