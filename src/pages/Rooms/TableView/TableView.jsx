import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TableView = ({ rooms }) => {
    // const { _id, main_image, room_name, price_per_night, review_count } = room;


    return (
        <div>
            <div className="overflow-x-auto font-forum">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-3xl text-[#3D3931]'>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room, index) => <tr key={room._id} className='text-xl'>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={room.main_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{room.room_name}</td>
                            <td>${room.price_per_night} / Night</td>
                            <th>
                                <Link to={`/roomDetails/${room._id}`}><button className="mt-4 bg-[#9B804E] p-2 text-white text-xl font-forum">View Details</button></Link>
                                {/* <button className="btn btn-ghost btn-xs">details</button> */}
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

TableView.propTypes = {
    rooms: PropTypes.array
}

export default TableView;