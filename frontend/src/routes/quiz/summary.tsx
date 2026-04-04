import { createFileRoute } from '@tanstack/react-router'
import { SummaryScreenTab } from '../../components/quiz/creatorTabs/summaryTab'

export const Route = createFileRoute('/quiz/summary')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
    <SummaryScreenTab />
  </>)
}
