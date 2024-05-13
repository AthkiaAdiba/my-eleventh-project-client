import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const UpdateDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const bookedRoomDetails = useLoaderData();
    // console.log(bookedRoomDetails)
    const { date, _id } = bookedRoomDetails;

    const handleUpdateDate = () => {

        axios.patch(`https://my-eleventh-project-server.vercel.app/updateDate/${_id}`, { date: startDate })
            .then(data => {
                // console.log(data.data)
                if (data.data.modifiedCount > 0) {
                    toast.success('Updated Successfully')
                }
            })
    }


    return (
        <div className="mx-auto mt-40 text-center font-forum space-y-3">
            <h2 className="text-2xl font-medium text-[#3D3931]">Your Booking Date: {new Date(date).toLocaleDateString()}</h2>
            {/* <label className="label mx-auto">
                <span className="label-text text-2xl text-[#9B804E] text-center">Pick Your New Booking Date:</span>
            </label> */}
            <h2 className="text-2xl text-[#9B804E]">Pick Your New Booking Date</h2>
            <DatePicker className="p-2 bg-[#9B804E] text-white text-xl"
                selected={startDate} onChange={(date) => setStartDate(date)} />
            <br />
            <button onClick={handleUpdateDate} className="bg-[#9B804E] p-2 text-white text-xl">Update Date</button>
        </div>
    );
};

export default UpdateDate;