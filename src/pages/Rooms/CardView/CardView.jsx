import PropTypes from 'prop-types';
import Room from '../../../components/Room/Room';

const CardView = ({ rooms }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                rooms.map(room => <Room key={room._id} room={room}></Room>)
            }
        </div>
    );
};

CardView.propTypes = {
    rooms: PropTypes.array
}

export default CardView;