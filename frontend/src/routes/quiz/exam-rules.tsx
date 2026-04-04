import { createFileRoute } from '@tanstack/react-router'
import { ExamRulesTab } from '../../components/quiz/creatorTabs/examRulesTab'
import { CreatorMenu } from '../../components/quiz/creatorHeader'

export const Route = createFileRoute('/quiz/exam-rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
    <CreatorMenu />
    <ExamRulesTab />
  </>)
}
