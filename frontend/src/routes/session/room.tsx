import { createFileRoute } from '@tanstack/react-router'
import { RoomPage } from '../../components/room/roomPage'

export const Route = createFileRoute('/session/room')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RoomPage/>
}
