import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {
    const roomDetails = useLoaderData();
    const { _id, room_name, short_description, price_per_night, size, availability, room_images, special_offers } = roomDetails;
    return (
        <div className="px-[5%] pt-28 lg:pt-36 pb-20 bg-[#FBF6E8] font-forum">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    room_images.map(image => <img className="h-[300px] w-full" key={image.idx} src={image} alt="" />)
                }
            </div>
            {/* Details */}
            <div className="p-6 pb-12 m-4 mx-auto space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                <div className="space-y-2">
                    <h2 className="text-6xl font-medium tracking-wide text-[#3D3931]">{room_name}</h2>
                    <p className="text-3xl text-[#9B804E]">{short_description}</p>
                    <div className="flex justify-between text-2xl text-[#9B804E]">
                        <p>Price: ${price_per_night} / Night</p>
                        <p>Size: {size}</p>
                    </div>
                    <div className="space-y-2 text-2xl text-[#9B804E]">
                        <p>Availability: <span className="bg-[#9B804E] p-2 text-white">{availability}</span></p>
                        <p>Special Offer: {special_offers}</p>
                    </div>
                    <div className="">
                        <button className="mt-6 bg-[#9B804E] p-2 text-white text-xl">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;