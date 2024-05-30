import { useEffect, useState } from "react";
import CardView from "./CardView/CardView";
import TableView from "./TableView/TableView";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState('0');
    const [maxPrice, setMaxPrice] = useState('1000');
    const [viewMode, setViewMode] = useState('card');

    useEffect(() => {
        fetch(`https://my-eleventh-project-server.vercel.app/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [minPrice, maxPrice])

    const handleFilter = e => {
        const value = e.target.value;
        // console.log(value)
        const value2 = value.split('-')[0];
        const value3 = value.split('-')[1]
        // console.log(value2, value3)
        setMinPrice(value2);
        setMaxPrice(value3);
    }

    return (
        <div className="px-[5%] pt-28 lg:pt-36 pb-24 bg-[#FBF6E8]">
            {/* dropdown */}
            <div className="text-center">
                <select 
                onChange={handleFilter}
                className="select select-bordered mx-auto bg-[#9B804E] text-white">
                    <option value=''>Filter By Price</option>
                    <option value='100-500'>$100 - $500</option>
                    <option value='500-1000'>$600 - $1000</option>
                </select>
            </div>
            <p className="tracking-[10px] text-[#9B804E] font-barlow mb-6">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10"><span className="text-[#3D3931]">HOTEL</span> <span className="text-[#9B804E]">ROOMS</span></h2>
            <div className="flex gap-6 mb-10">
                <button onClick={() => setViewMode('card')}><RiLayoutGrid2Fill className="text-3xl" style={{color: viewMode === 'card' ? '#9B804E' : ''}}></RiLayoutGrid2Fill></button>
                <button onClick={() => setViewMode('table')}><AiOutlineMenu className="text-3xl" style={{color: viewMode === 'table' ? '#9B804E' : ''}}></AiOutlineMenu></button>
            </div>
            {viewMode === 'card' ? <CardView rooms={rooms}></CardView> : <TableView rooms={rooms}></TableView>}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div> */}
        </div>
    );
};

export default Rooms;