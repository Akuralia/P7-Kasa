import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/index.scss'

import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  // {
  //   path: "/a_propos",
  //   element: <Apropos />
  // },
  // {
  //   path: "/logement",
  //   element: <Logement />
  // },
  // {
  //   path: "/404",
  //   element: <NotFound />
  // },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


