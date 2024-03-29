import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
 
  
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import ErrorPage from './UpdateProduct';

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App />,
    
    children: [
      {
    path: "/Login",
    element: <Login />,
    errorElement: <div>404 Not Found!</div>
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/AddProduct",
    element: <AddProduct />,
  },
  {
    path: "/UpdateProduct",
    element: <UpdateProduct />,
  },
    ],
    errorElement: <ErrorPage />
  },
  
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
