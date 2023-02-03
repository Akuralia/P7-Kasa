import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import './styles/index.scss'

import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';
import Api, { apiLoader } from './api/Api';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Home />} loader={apiLoader} />
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
));



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


