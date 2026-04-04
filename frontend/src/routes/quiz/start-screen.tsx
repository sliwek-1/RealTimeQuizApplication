import { createFileRoute } from '@tanstack/react-router'
import { StartScreenTab } from '../../components/quiz/creatorTabs/startScreenTab'

export const Route = createFileRoute('/quiz/start-screen')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
      <StartScreenTab />
  </>)
}
