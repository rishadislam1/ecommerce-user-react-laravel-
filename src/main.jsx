import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/css/custom.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './route/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
