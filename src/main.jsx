import React, { lazy, Suspense } from 'react';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import AdminLayout from './Admin/Components/AdminLayout.jsx';
import store from "./Store/Store.js";
import { Provider } from 'react-redux';
import UserLayout from './User/Components/UserLayout.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Loader from "./Components/Loader.jsx";

// Front-end routes
const Men = lazy(() => import('./Pages/Men'));
const Women = lazy(() => import('./Pages/Women'));
const BoyGirl = lazy(() => import('./Pages/BoysGirls.jsx'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Login = lazy(() => import('./Pages/Login'));

const Home = lazy(() => import('./Pages/Home'));
const TrackYourOrder = lazy(() => import('./Pages/TrackYourOrder'));
const Cart = lazy(() => import('./Pages/Cart'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const Signup = lazy(() => import('./Pages/SignUp'));
const ForgotPassword = lazy(() => import('./Pages/ForgotPassword.jsx'));
const ProductDetail = lazy(() => import('./Pages/ProductDetail.jsx'))

// Admin routes

const AdminDashboard = lazy(() => import('./Admin/Pages/Dashboard.jsx'))
const Categories = lazy(() => import('./Admin/Pages/Categories.jsx'));
const SubCategories = lazy(() => import('./Admin/Pages/SubCategories.jsx'))
const Products = lazy(() => import('./Admin/Pages/Products.jsx'));
const CreateProducts = lazy(() => import('./Admin/Pages/CreateProducts.jsx'));
const Enquiries = lazy(() => import('./Admin/Pages/Enquiries.jsx'))
const EnquiryDetail = lazy(() => import('./Admin/Pages/EnquiryDetail.jsx'))





// user routes
const UserDashboard = lazy(() => import('./User/Pages/Dashboard.jsx'))
const UserorderHistory = lazy(() => import('./User/Pages/OrderHistory.jsx'))
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
        path: "/boys-girls",
        element: <Suspense fallback={<div>.......Loading</div>}><BoyGirl /></Suspense>
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
        path: "/mens/:slug",
        element: <Suspense fallback={<div>.......Loading</div>}><ProductDetail /></Suspense>

      },


      {
        path: "*",
        element: <Suspense fallback={<div>.......Loading</div>}><NotFound /></Suspense>
      },
    ]
  },


  {
    path: "admin",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        children: [
          {
            path: "dashboard",
            element: (
              <Suspense fallback={<div>....Loading</div>}>
                <AdminDashboard />
              </Suspense>
            ),

          },
          {
            path: "categories",
            element: (
              <Suspense fallback={<div>......Loading</div>}>
                <Categories />
              </Suspense>
            )
          },
          {
            path: "subcategories",
            element: (
              <Suspense fallback={<div>......Loading</div>}>
                <SubCategories />
              </Suspense>
            )
          },
          {
            path: "products",
            element: (
              <Suspense fallback={<div>......Loading</div>}>
                <Products />
              </Suspense>
            )
          },
          {
            path: "create-products",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div>......Loading</div>}>
                    <CreateProducts />
                  </Suspense>
                )
              },
              {
                path: ":slug",
                element: (
                  <Suspense fallback={<div>........Loading</div>}>
                    <CreateProducts />
                  </Suspense>
                )
              }
            ]
          },
          // {
          //   path: "create-products?id",
          //   element: (
          //     <Suspense fallback={<div>......Loading</div>}>
          //       <CreateProducts />
          //     </Suspense>
          //   )
          // },
          {
            path: "enquiries",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div>......Loading</div>}>
                    <Enquiries />
                  </Suspense>
                )
              },
              {
                path: ":id",
                element: (
                  <Suspense fallback={<div>......Loading</div>}>
                    <EnquiryDetail />
                  </Suspense>
                )
              }
            ]
          }




        ],
      },
    ],
  },
  // user routes


  {
    path: "user",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <UserLayout />,
        children: [
          {
            path: "dashboard",
            element: (
              <Suspense fallback={<div>....Loading</div>}>
                <UserDashboard />
              </Suspense>
            ),

          },
          {
            path: "orderhistory",
            element: (
              <Suspense fallback={<div>......Loading</div>}>
                <UserorderHistory />
              </Suspense>
            )
          }
        ],
      },
    ],
  },




]);


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
