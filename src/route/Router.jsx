import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import UserLoginPage from "../pages/UserLoginPage/UserLoginPage";
import ContactPage from "../pages/Contact/ContactPage";
import Purchase from "../pages/Purchase/Purchase";
import Privacy from "../pages/Privacy/Privacy";
import Refund from "../pages/Refund/Refund";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import NotificationPage from "../pages/Notification/NotificationPage";
import FavoritePage from "../pages/Favorite/FavoritePage";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: '/login',
              element: <UserLoginPage></UserLoginPage>
            },
            {
              path: '/contact',
              element: <ContactPage></ContactPage>
            },
            {
              path: '/purchase',
              element: <Purchase></Purchase>
            },
            {
              path: '/privacy',
              element: <Privacy></Privacy>
            },
            {
              path: '/refund',
              element: <Refund></Refund>
            },
            {
              path: '/productDetails',
              element: <ProductDetailsPage/>
            },
            {
              path: '/notification',
              element: <NotificationPage/>
            },
            {
              path: '/favorite',
              element: <FavoritePage/>
            }

        ]
    }
  ])

  export default router;