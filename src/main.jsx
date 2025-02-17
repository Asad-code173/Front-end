import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import AdminLayout from './Admin/Components/AdminLayout.jsx';
import store from "./Store/Store.js";
import { Provider } from 'react-redux';
// import Loader from "./Components/Loader.jsx";

// Front-end routes
const Men = lazy(() => import('./Pages/Men'));
const Women = lazy(() => import('./Pages/Women'));
const Fragrances = lazy(() => import('./Pages/Fragrances'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Login = lazy(() => import('./Pages/Login'));
const Home = lazy(() => import('./Pages/Home'));
const TrackYourOrder = lazy(() => import('./Pages/TrackYourOrder'));
const Cart = lazy(() => import('./Pages/Cart'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const Signup = lazy(() => import('./Pages/SignUp'));
const ForgotPassword = lazy(() => import('./Pages/ForgotPassword.jsx'));

// Admin routes

const AdminDashboard = lazy(()=> import('./Admin/Pages/Dashboard.jsx'))
const Categories = lazy(() => import('./Admin/Pages/Categories.jsx'));
// const Products = lazy(() => import('./Admin/Pages/Products.jsx'));
// const Enquiries = lazy(() => import('./Admin/Pages/Enquiries.jsx'));


// user routes
const UserDashboard = lazy(()=> import('./User/Components/Dashboard.jsx'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Suspense fallback={<div>.......Loading</div>}><Home /></Suspense>
      },
      {
        path: "/men",
        element: <Suspense fallback={<div>.......Loading</div>}><Men /></Suspense>
      },
      {
        path: "/women",
        element: <Suspense fallback={<div>.......Loading</div>}><Women /></Suspense>
      },
      {
        path: "/fragrances",
        element: <Suspense fallback={<div>.......Loading</div>}><Fragrances /></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>.......Loading</div>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<div>.......Loading</div>}><Contact /></Suspense>
      },
      {
        path: "/login",
        element: <Suspense fallback={<div>.......Loading</div>}><Login /></Suspense>
      },
      {
        path: "/signup",
        element: <Suspense fallback={<div>.......Loading</div>}><Signup /></Suspense>
      },
      {
        path: "/trackorder",
        element: <Suspense fallback={<div>.......Loading</div>}><TrackYourOrder /></Suspense>
      },
      {
        path: "/cart",
        element: <Suspense fallback={<div>.......Loading</div>}><Cart /></Suspense>
      },
      {
        path: "/forgot-password",
        element: <Suspense fallback={<div>.......Loading</div>}><ForgotPassword /></Suspense>
      },
      {
        path: "*",
        element: <Suspense fallback={<div>.......Loading</div>}><NotFound /></Suspense>
      },
    ]
  },
  // Admin routes 
  {
    path: "admin",
    element: <AdminLayout />, 
    children: [
      {
        path: "dashboard",
        element: <Suspense fallback={<div>.....Loading</div>}><AdminDashboard /></Suspense>
      },
      {
        path:"categories",
        element: <Suspense fallback={<div>.....Loading</div>}><Categories/></Suspense>
      },
      
      
     
    ]
  },
// user routes

  {
    path:"user",
    children:[
      {
        path:"dashboard",
        element:<Suspense fallback = {<div>...Loading</div>}><UserDashboard/></Suspense>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
