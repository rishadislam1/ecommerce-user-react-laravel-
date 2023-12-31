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
import CartPage from "../pages/Cart/CartPage";
import AboutPage from "../pages/About/AboutPage";
import ProductCategory from "../pages/ProductCategory/ProductCategory";
import ProductSubCategory from "../pages/ProductSubcategory/ProductSubCategory";
import SearchPage from "../pages/SearchPage/SearchPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../pages/User/Profile/ProfilePage";

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
              path: '/register',
              element: <RegisterPage/>
            },
            {
              path: '/forgetpassword',
              element: <ForgetPassword/>
            },
            {
              path: '/resetpassword/:id',
              element: <ResetPassword/>
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
              element: <PrivateRoute><NotificationPage/></PrivateRoute>
            },
            {
              path: '/favorite',
              element: <FavoritePage/>
            },
            {
              path: '/cart',
              element: <CartPage/>
            },
            {
              path: '/about',
              element: <AboutPage/>
            },
            {
              path:'/productcategory/:category',
              element: <ProductCategory/>
            },
            {
              path:'/productsubcategory/:category/:subcategory',
              element: <ProductSubCategory/>
            },
            {
              path:'/search/:key',
              element: <SearchPage/>
            },
            {
              path: '/user',
              element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
            }

        ]
    }
  ])

  export default router;