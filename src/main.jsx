import RouteLayout from './pages/routeLayout/RouteLayout.jsx';
import { createRoot } from 'react-dom/client'
import './index.css'

// Provider For Redux
import { Provider } from 'react-redux'
import store from './store/index.js'
// ===================================== //
// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
// ===================================== //

// Reacr Router Dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/home", element: <Home /> },
    ]
  }
])

// ===================================== //
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
