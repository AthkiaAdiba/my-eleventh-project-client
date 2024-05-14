import { useEffect } from "react";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HotelMap from "../HotelMap/HotelMap";
import Newsletter from "../Newsletter/Newsletter";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import Slider from "../Slider/Slider";
import { RxCross1 } from "react-icons/rx";


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
                <div className="relative bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] modal-box h-full w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/dv6fgvj2c/image/upload/v1715652789/exx24qpxlmvhr29tqa7e.jpg)' }}>
                    <div className="font-forum p-2 text-center w-full text-white">
                        <h1 className="text-3xl tracking-widest">A HOLIDAY TO REMEMBER</h1>
                        <p className="text-xl mt-3">Enjoy absolute serenity, peace and beauty of nature in the heart of Dambulla</p>
                        <h1 className="text-3xl tracking-[10px] mt-4">EXCLUSIVE OFFER</h1>
                        <p className="text-5xl mt-4">$500/- <span className="text-xl">Double Room</span></p>
                        <p className="text-xl mt-2">FOR RESERVATIONS</p>
                        <p className="text-base">+ 94 (0)773889237</p>
                        <p>herittage@gmail.com</p>
                    </div>
                    <div className="modal-action absolute -top-7 right-0">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button><RxCross1 className="text-4xl text-white"></RxCross1></button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Home;