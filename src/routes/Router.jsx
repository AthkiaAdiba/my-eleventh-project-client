import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyBookings from "../pages/MyBookings/MyBookings";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../components/RoomDetails/RoomDetails";
import UpdateDate from "../pages/UpdateDate/UpdateDate";
import Reviews from "../components/Reviews/Reviews";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
            },
            {
                path: '/roomDetails/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/roomDetails/${params.id}`)
            },
            {
                path: '/updateDate/:id',
                element: <UpdateDate></UpdateDate>,
                loader: ({params}) => fetch(`http://localhost:5000/bookedRoomDetails/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <Reviews></Reviews>,
                loader: ({params}) => fetch(`http://localhost:5000/bookedRoomDetails/${params.id}`)
            }
        ]
    }
    
]);

export default router;