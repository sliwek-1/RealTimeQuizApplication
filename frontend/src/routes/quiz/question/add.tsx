import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/question/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quiz/add"!</div>
}
