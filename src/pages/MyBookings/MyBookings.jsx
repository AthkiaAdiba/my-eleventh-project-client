import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { IoPencilSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import Swal from 'sweetalert2'
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from "axios";
import Reviews from "../../components/Reviews/Reviews";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    console.log(myBookings)

    // console.log(user?.email)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/bookedRoom/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyBookings(data))
        }

    }, [user]);


    const handleDelete = (_id, date, room_id) => {
        console.log(_id);
        console.log(date);
        const bookingMoment = moment(date);
        const currentDate = moment();
        const differenceInDays = bookingMoment.diff(currentDate, 'days');
        // console.log(bookingMoment)
        // console.log(currentDate)
        console.log(differenceInDays)
        if (!differenceInDays >= 1) {
            return toast.error('Now You Can Not Cancel Your Booking')
        }


        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/deleteBookedRoom/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            // update availability
                            axios.patch(`http://localhost:5000/availability/${room_id}`, { availability: 'Available' })
                                .then(data => {
                                    console.log(data.data)
                                })
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Booked Room has been deleted.",
                                icon: "success"
                            });

                            const remaining = myBookings.filter(list => list._id !== _id);
                            setMyBookings(remaining);

                        }
                    })
            }
        });
    }



    return (
        <div className="pt-28 lg:pt-44 pb-20 px-[10%] bg-[#FBF6E8]">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#3D3931] text-white text-xl font-roboto font-medium">
                        <tr>
                            <th></th>
                            <th>Room Name</th>
                            <th>Date</th>
                            <th>Give Your Review</th>
                            <th>Update Date</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myBookings.map((oneRow, idx) => <tr key={oneRow._id} className="hover hover:bg-[#3D3931] bg-[#FBF6E8] text-black text-base font-barlow font-medium">
                                <th>{idx + 1}</th>
                                <td>{oneRow.room_name}</td>
                                <td>{new Date(oneRow.date).toLocaleDateString()}</td>
                                <td>
                                    <Link to={`/review/${oneRow._id}`}><MdRateReview className="text-xl font-extrabold"></MdRateReview></Link>
                                    </td>
                                <td><Link to={`/updateDate/${oneRow._id}`}><IoPencilSharp className="text-xl font-extrabold"></IoPencilSharp></Link></td>
                                <th 
                                onClick={() => handleDelete(oneRow._id, oneRow.date, oneRow.room_id)}><MdDeleteForever className="text-xl font-extrabold"></MdDeleteForever></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* review table */}
            <Reviews></Reviews>
        </div>
    );
};

export default MyBookings;