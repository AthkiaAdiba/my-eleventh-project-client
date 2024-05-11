import HotelMap from "../HotelMap/HotelMap";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="mb-24 mt-24 w-full">
                <HotelMap></HotelMap>
            </div>
        </div>
    );
};

export default Home;