import { createFileRoute } from '@tanstack/react-router'
import { StartScreenTab } from '../../components/quiz/creatorTabs/startScreenTab'
import { CreatorMenu } from '../../components/quiz/creatorHeader'

export const Route = createFileRoute('/quiz/start-screen')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
      <CreatorMenu />
      <StartScreenTab />
  </>)
}
