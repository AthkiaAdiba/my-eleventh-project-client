import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../Review/Review";
import Swal from "sweetalert2";




const RoomDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    // const loadedRoomDetails = useLoaderData();
    const [roomDetails, setRoomDetails] = useState([]);
    const [isUpdate, setIsUpdate] = useState(true)
    const [reviews, setReviews] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const { _id, room_name, short_description, price_per_night, size, availability, room_images, special_offers } = roomDetails;
    // console.log(reviews)
    const { id } = useParams();
    // console.log(id)

    const refetch = () => {
        setIsUpdate(!isUpdate)
    }



    useEffect(() => {
        axios.get(`https://my-eleventh-project-server.vercel.app/comments/${_id}`)
            .then(data => {
                // console.log(data.data)
                setReviews(data.data)
            })
    }, [_id])

    useEffect(() => {
        axios.get(`https://my-eleventh-project-server.vercel.app/roomDetails/${id}`)
            .then(data => {
                // console.log(data.data)
                setRoomDetails(data.data)

            })
    }, [id, user, isUpdate])


    const handleBookNow = () => {
        if (!user) {
            navigate('/login')
        }
        else if (availability === 'Not Available') {
            return toast.error('This Room is already booked!')
        }
        else {
            document.getElementById('my_modal_1').showModal()
        }
    }

    const handleRoomBook = () => {

        // if (availability === 'Not Available') {
        //     return toast.error('This Room is already booked!')
        // }
        const date = startDate;

        const email = user?.email;
        const displayName = user?.displayName;

        const bookedRoom = { room_id: _id, date, email, displayName, room_name, short_description, price_per_night, size, special_offers }
        // console.log(bookedRoom)


        axios.post('https://my-eleventh-project-server.vercel.app/bookRoom', bookedRoom)
            .then(data => {
                // console.log(data.data)
                // update availability
                if (data.data.insertedId) {
                    axios.patch(`https://my-eleventh-project-server.vercel.app/availability/${_id}`, { availability: 'Not Available' })
                        .then(data => {
                            // console.log(data.data)
                            if (data.data.modifiedCount > 0) {
                                refetch();

                            }
                        })
                }
            })
        Swal.fire({
            title: 'Success!',
            text: 'Your have booked Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }


    return (
        <div className="px-[5%] pt-28 lg:pt-36 pb-20 bg-[#FBF6E8] font-forum">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    room_images?.map(image => <img className="h-[300px] w-full" key={image?.idx} src={image} alt="" />)
                }
            </div>
            {/* Details */}
            <div className="p-6 pb-12 m-4 mx-auto space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                <div className="space-y-2">
                    <h2 className="text-6xl font-medium tracking-wide text-[#3D3931]">{room_name}</h2>
                    <p className="text-3xl text-[#9B804E]">{short_description}</p>
                    <div className="flex flex-col lg:flex-row justify-between text-2xl text-[#9B804E]">
                        <p>Price: ${price_per_night} / Night</p>
                        <p>Size: {size}</p>
                    </div>
                    <div className="space-y-2 text-2xl text-[#9B804E]">
                        <p>Availability: <span className="bg-[#9B804E] p-2 text-white">{availability}</span></p>
                        <p>Special Offer: {special_offers}</p>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-2xl text-[#9B804E]">Pick Your Date:</span>
                        </label>
                        <DatePicker className="p-2 bg-[#9B804E] text-white text-xl"
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                        <br />
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="mt-6 p-2 bg-[#9B804E] text-white text-2xl" onClick={() => handleBookNow()}>Book Now</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box bg-[#FBF6E8]">
                                <h3 className="text-3xl text-[#3D3931] font-medium">{room_name}</h3>
                                <p className="py-4 text-2xl text-[#9B804E]">{short_description}</p>
                                <p className="text-2xl text-[#9B804E]">Price: ${price_per_night} / Night</p>
                                <p className="text-2xl text-[#9B804E]">Date: {startDate.toLocaleDateString()}</p>
                                <button onClick={handleRoomBook} className="bg-[#9B804E] p-2 text-white text-2xl mt-10">Confirm</button>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="bg-[#9B804E] p-2 text-white text-2xl">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            {/* review section */}
            {reviews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reviews.map(review => <Review key={review._id} review={review}></Review>)}
                </div>
            ) :
                (<p className="text-center text-6xl text-[#3D3931] font-forum">No reviews available for this room.</p>)}
        </div>
    );
};

export default RoomDetails;