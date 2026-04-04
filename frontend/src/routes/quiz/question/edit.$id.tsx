import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/question/edit/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quiz/update/$id"!</div>
}
