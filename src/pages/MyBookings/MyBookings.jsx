import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { IoPencilSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";


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
                            <th>Update Date</th>
                            <th>Cencel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myBookings.map((oneRow, idx) => <tr key={oneRow._id} className="hover hover:bg-[#3D3931] bg-[#FBF6E8] text-black text-base font-barlow font-medium">
                                <th>{idx + 1}</th>
                                <td>{oneRow.room_name}</td>
                                <td>{oneRow.date}</td>
                                <td><Link to={`/update/${oneRow._id}`}><IoPencilSharp className="text-xl font-extrabold"></IoPencilSharp></Link></td>
                                <th><MdDeleteForever className="text-xl font-extrabold"></MdDeleteForever></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;