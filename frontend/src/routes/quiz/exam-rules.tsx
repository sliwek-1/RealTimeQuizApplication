import { createFileRoute } from '@tanstack/react-router'
import { ExamRulesTab } from '../../components/quiz/creatorTabs/examRulesTab'

export const Route = createFileRoute('/quiz/exam-rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
    <ExamRulesTab />
  </>)
}
