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
import Dashboard from './pages/dashboard/Dashboard.jsx';
import AddProducts from './pages/addProducts/AddProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/add", element: <AddProducts /> },
    ]
  }
])

// ===================================== //
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
