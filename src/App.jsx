import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home, homeLoader} from './pages/Home';
import {Lodging, lodgingLoader} from './pages/Lodging';
import {About, aboutLoader} from './pages/About';
import NotFound from './pages/NotFound';


import './sass/index.scss'

export default function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
            errorElement: <NotFound/>,
            loader: homeLoader
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