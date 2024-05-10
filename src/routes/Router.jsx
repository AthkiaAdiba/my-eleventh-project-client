import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyBookings from "../pages/MyBookings/MyBookings";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../components/RoomDetails/RoomDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <MyBookings></MyBookings>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
            },
            {
                path: '/roomDetails/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/roomDetails/${params.id}`)
            }
        ]
    }
    
]);

export default router;