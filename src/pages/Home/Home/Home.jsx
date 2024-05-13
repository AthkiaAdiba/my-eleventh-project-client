import { useEffect } from "react";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HotelMap from "../HotelMap/HotelMap";
import Newsletter from "../Newsletter/Newsletter";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import Slider from "../Slider/Slider";


const Home = () => {
    
    useEffect(() => {
        document.getElementById('my_modal_1').showModal()
    }, [])


    return (
        <div>
            <Slider></Slider>
            <FeaturedRooms></FeaturedRooms>
            <Newsletter></Newsletter>
            <div className="mb-24 mt-24 w-full -z-50">
                <HotelMap></HotelMap>
            </div>
            <ReviewSlider></ReviewSlider>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => }>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Home;