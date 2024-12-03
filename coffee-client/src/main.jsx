import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layouts/Root';
import Home from './components/layouts/Home';
import AddCoffee from './components/pages/AddCoffee';
import UpdateCoffee from './components/pages/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch('http://localhost:5000/coffees2'),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees2/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
