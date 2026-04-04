import { createFileRoute } from '@tanstack/react-router'
import { Creator } from '../../components/quiz/creator'


export const Route = createFileRoute('/quiz/creator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Creator />
}
