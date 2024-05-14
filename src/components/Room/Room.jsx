import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Room = ({ room }) => {
    const { _id, main_image, room_name, price_per_night, review_count } = room;
    return (
        <Link to={`/roomDetails/${_id}`}>
            <div className="relative font-forum mb-5" data-aos="zoom-in" data-aos-duration="2000">
                <img src={main_image} alt="" className="hover:scale-[1.05] object-cover object-center w-full h-72 bg-gray-500" />
                <h2 className="mt-10 text-4xl font-medium tracking-wide text-[#3D3931] font-forum">{room_name}</h2>
                <p className="mt-4 text-3xl text-[#9B804E]">Total Review: {review_count}</p>
                <div className="absolute top-4">
                    <div className="bg-[#9B804E] p-2 text-white text-lg">
                        <p>${price_per_night} / Night</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Room.propTypes = {
    room: PropTypes.object
}

export default Room;