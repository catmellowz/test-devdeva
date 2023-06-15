import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import UsersList from '../pages/UsersList';
import CreateUser from '../pages/CreateUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersList />,
  },
  {
    path: '/create',
    element: <CreateUser />,
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
