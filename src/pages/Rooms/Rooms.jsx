import { useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Room from "../../components/Room/Room";
import { useEffect, useState } from "react";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(700);

    useEffect(() => {
        fetch(`http://localhost:5000/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [minPrice, maxPrice])


    return (
        <div className="px-[5%] pt-28 lg:pt-36 pb-20 bg-[#FBF6E8]">
            {/* dropdown */}
            <div className="text-center">
                {/* <select 
                onChange={e => setSort(e.target.value)}
                value={sort} name="sort"
                className="select select-bordered mx-auto bg-[#9B804E] text-white">
                    <option value=''>Sort By Price</option>
                    <option value='dsc'>Descending Order</option>
                    <option value='asc'>Ascending Order</option>
                </select> */}
                <select className="select select-bordered mx-auto bg-[#9B804E] text-white">
                    <option value=''>Filter By Price Range</option>
                    <option onClick={() => {
                        setMinPrice(100);
                        setMaxPrice(500);
                    }}>$100 - $500</option>
                    <option>$500 - $1000</option>
                </select>
                {/* <details className="dropdown">
                    <summary className="m-1 btn bg-[#9B804E] text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                        <li className="hover:bg-[#9B804E] hover:text-white rounded-lg"><a>Price Per Night</a></li>
                    </ul>
                </details> */}
            </div>
            <p className="tracking-[10px] text-[#9B804E] font-barlow mb-6">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10"><span className="text-[#3D3931]">HOTEL</span> <span className="text-[#9B804E]">ROOMS</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;