import { createFileRoute } from '@tanstack/react-router'
import Register from '../components/register'

export const Route = createFileRoute('/register')({
  component: RegisterRoute,
})

function RegisterRoute() {
  return <Register />
}
