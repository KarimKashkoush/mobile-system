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
import Signup from './pages/signup/Signup.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/add", element: <AddProducts /> },
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <SignIn />
  }
])

// ===================================== //
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
