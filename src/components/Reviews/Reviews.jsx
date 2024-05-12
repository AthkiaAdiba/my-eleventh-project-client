import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";
import axios from "axios";


const Reviews = () => {
    const { user } = useContext(AuthContext);
    const bookedRoomDetails = useLoaderData()
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
    // console.log(bookedRoomDetails)


    const handleAddReview = e => {
        e.preventDefault();

        const form = e.target;

        const room_id = bookedRoomDetails.room_id;
        const user_image = user?.photoURL;
        const userEmail = user?.email;
        const userName = user?.displayName;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const timestamp = startDate;

        const review = { room_id, user_image, userName, userEmail, rating, comment, timestamp }
        console.log(review);


        axios.post('http://localhost:5000/addComment', review)
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Comment Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }


    return (
        <div className="bg-[#FBF6E8] font-forum pb-24 py-16 px-3 lg:px-24 mt-16 lg:mt-20">
            <h2 className="text-4xl font-extrabold text-center mb-5 text-[#3D3931]">Give Your Review</h2>
            <form onSubmit={handleAddReview}>
                {/* rating and userName row */}
                <div className="md:flex mb-3 lg:mb-8">
                    <div className="form-control md:w-1/2 mb-3 lg:mb-0">
                        <label className="label">
                            <span className="label-text text-[#3D3931] text-xl font-medium">Rating</span>
                        </label>
                        <label className="input-group text-black">
                            <select type="text" name="rating" placeholder="Rating" className="select select-bordered w-full text-gray-400 text-base" required>
                                <option className="text-black">Rating</option>
                                <option className="text-black">1</option>
                                <option className="text-black">2</option>
                                <option className="text-black">3</option>
                                <option className="text-black">4</option>
                                <option className="text-black">5</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-[#3D3931] text-xl font-medium">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" defaultValue={user?.displayName} disabled placeholder="User Name" className="input text-[#3D3931] input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* comment and timestamp row */}
                <div className="md:flex mb-3 lg:mb-8">
                    <div className="form-control md:w-1/2 mb-3 lg:mb-0">
                        <label className="label">
                            <span className="label-text text-[#3D3931] text-xl font-medium">Your Comment</span>
                        </label>
                        <label className="input-group">
                            <textarea name="comment" placeholder="Your Comment" className="textarea textarea-bordered textarea-sm w-full" required ></textarea>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text text-[#3D3931] text-xl font-medium">TimeStamp</span>
                        </label>
                        <label className="input-group">
                            <DatePicker className="p-2 w-full bg-[#9B804E] text-white text-xl"
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit Your Review" className="btn bg-[#3D3931] text-white text-xl font-medium border-none w-full" />

            </form>
        </div>
    );
};

export default Reviews;