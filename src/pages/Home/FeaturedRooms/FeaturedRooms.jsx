import { useEffect, useState } from "react";
import FeaturedRoom from "../../../components/FeaturedRoom/FeaturedRoom";


const FeaturedRooms = () => {
    const [featuredRooms, setFeaturedRooms] = useState([]);
    // console.log(featuredRooms)


    useEffect(() => {
        fetch('https://my-eleventh-project-server.vercel.app/featuredRooms')
            .then(res => res.json())
            .then(data => setFeaturedRooms(data))
    }, [])

    return (
        <div className="mx-[5%] mt-28 lg:mt-44 mb-28">
            <p className="tracking-[10px] text-[#9B804E] font-forum mb-6">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10 font-forum"><span className="text-[#3D3931]">Featured</span> <span className="text-[#9B804E] font-forum">ROOMS</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    featuredRooms.slice(0, 3).map(room => <FeaturedRoom key={room._id} room={room}></FeaturedRoom>)
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;