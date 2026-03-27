import { createFileRoute } from '@tanstack/react-router'
import { SessionCreate } from '../../components/session/create'

export const Route = createFileRoute('/session/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SessionCreate />
}
