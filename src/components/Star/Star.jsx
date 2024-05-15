import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';


const Star = ({rating}) => {
     const stars = []
    for(let i = 0; i < rating; i++){
        stars.push(i)
    }
    console.log(stars)

    return (
        <div className="flex gap-1">
           {
            stars.map(page => <FaStar key={page.index}></FaStar>)
           }
        </div>
    );
};

Star.propTypes = {
    rating: PropTypes.number
}

export default Star;