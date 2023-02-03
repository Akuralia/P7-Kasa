import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Lodging from './pages/Logement';
import Api, { lodgingLoader, aboutLoader } from './api/Api';

import './sass/main.scss'

export default function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
            loader: lodgingLoader
        },
        {
            path:'about',
            element: <About />,
            loader: aboutLoader
                
        },
        {
            path:'/*',
            element: <NotFound />        
        }
    ])

    return(
        
            <div className='App'>
                <RouterProvider router={router}/>  
            </div>
        
        )


    // <Routes>
    //     <Route path="/" element={<Home />} loader={apiLoader} />
    //     <Route path="/lodging/:id" element={<Lodging />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/*" element={<NotFound />} />
    // </Routes>

}