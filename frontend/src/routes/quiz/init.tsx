import { createFileRoute } from '@tanstack/react-router'
import { CreateQuizTab } from '../../components/quiz/creatorTabs/createQuizTab'
import { CreatorMenu } from '../../components/quiz/creatorHeader'

export const Route = createFileRoute('/quiz/init')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
    <CreatorMenu />
    <CreateQuizTab />
  </>)
}
