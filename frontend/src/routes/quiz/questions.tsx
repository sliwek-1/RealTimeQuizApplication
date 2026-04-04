import { createFileRoute } from '@tanstack/react-router'
import { QuestionsList } from '../../components/quiz/addQuestionTab/questionsList'
import { CreatorMenu } from '../../components/quiz/creatorHeader'
import { store } from '../../store'

export const Route = createFileRoute('/quiz/questions')({
  component: RouteComponent,
  loader: () => {
    const questions = store.getState().examConfig.questions;

    return {questions}
  }
})

function RouteComponent() {
  return (
    <>
      <CreatorMenu />
      <QuestionsList />
    </>
  )
}
