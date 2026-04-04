import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { store } from "../store";
import { removeUserFromStorage, addUserToStorage } from "../features/userSlice";
import { Container } from 'react-bootstrap';
import config from '../config';
import { CreatorMenu } from '../components/quiz/creatorHeader';

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
      const req = await fetch(`http://${config.host}:${config.port}/api/whoami`, {
          method: 'post',
          credentials: 'include'
      });
        
      const res = await req.json();
      console.log(res.userData)

      if(!req.ok) {
          store.dispatch(removeUserFromStorage());
          throw redirect({
              to: '/login'
          })
      }

      store.dispatch(addUserToStorage(res?.userData));
  }
})

function RouteComponent() {
  return (<>
    <Container>
        <CreatorMenu />
        <Outlet />
    </Container>
  </>)
}
