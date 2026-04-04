import { createFileRoute } from '@tanstack/react-router'
import { SummaryScreenTab } from '../../components/quiz/creatorTabs/summaryTab'
import { CreatorMenu } from '../../components/quiz/creatorHeader'

export const Route = createFileRoute('/quiz/summary')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
    <CreatorMenu />
    <SummaryScreenTab />
  </>)
}
