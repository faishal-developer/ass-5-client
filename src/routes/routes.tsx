import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/signup';
import BookDetails from '../pages/BookDetails';
import AddNewBook from '../pages/AddNewBookPage';
import Layout from '../layouts/layout';
import PrivateRoute from './protected';

//we have to use .tsx where we use jsx
const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/signup',
                element:<Signup/>,
            },
            {
                path:'/book-details/:bookId',
                element:<BookDetails/>,
            },
            {
                path:'/add-book',
                element:(
                    <PrivateRoute>
                        <AddNewBook/>
                    </PrivateRoute>
                ),
            },
            {
                path:'/edit-book/:bookId',
                element:(
                    <PrivateRoute>
                        <AddNewBook/>
                    </PrivateRoute>
                ),
            },
            {
                path:'*',
                element:<NotFound/>,
            }
        ]
    },
    
])

export default routes;