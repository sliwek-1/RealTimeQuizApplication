import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/creator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quiz/creator"!</div>
}
