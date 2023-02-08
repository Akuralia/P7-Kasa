import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { lodgingLoader, aboutLoader } from './api/Api';

import './sass/main.scss'

export default function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
            errorElement: <NotFound/>,
            loader: lodgingLoader
        },
        {
            path:'logement/:id',
            element: <Lodging />,
            errorElement: <NotFound/>,
            loader: lodgingLoader
        },
        {
            path:'about',
            element: <About />,
            errorElement: <NotFound/>,
            loader: aboutLoader
        }
    ])

    return(
            <div className='App'>
                <RouterProvider router={router}/>
            </div>
        
        )

}