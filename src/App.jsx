import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { lodgingsLoader, lodgingLoader, aboutLoader} from './api/Api';

import './sass/index.scss'

export default function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
            errorElement: <NotFound/>,
            loader: lodgingsLoader
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