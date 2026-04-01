import { createFileRoute } from '@tanstack/react-router'
import { CreatorMenu } from '../../components/quiz/creator'

export const Route = createFileRoute('/quiz/creator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreatorMenu />
}
