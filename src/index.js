import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/App';

const homeRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={homeRouter} />
  </React.StrictMode>
);


