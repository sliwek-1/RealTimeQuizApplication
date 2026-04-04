import { createFileRoute } from '@tanstack/react-router'
import { AddQuestionForm } from '../../../components/quiz/addQuestionTab/addQuestionForm'

export const Route = createFileRoute('/quiz/question/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddQuestionForm />
}
