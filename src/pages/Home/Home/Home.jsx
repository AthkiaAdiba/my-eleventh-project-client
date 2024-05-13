import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HotelMap from "../HotelMap/HotelMap";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedRooms></FeaturedRooms>
            <div className="mb-24 mt-24 w-full -z-50">
                <HotelMap></HotelMap>
            </div>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default Home;