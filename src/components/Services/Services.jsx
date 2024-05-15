import { FaCar, FaHandHolding  } from "react-icons/fa";
import { LuWifi } from "react-icons/lu";
import { MdLocalLaundryService } from "react-icons/md";
import { MdBreakfastDining } from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { IoIosFitness } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";

const Services = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mb-2"><FaCar className="mx-auto"></FaCar></p>
                <p>Airport Pick-up</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mb-2"><FaHandHolding className="mx-auto"></FaHandHolding></p>
                <p>Housekeeper Services</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><LuWifi className="mx-auto"></LuWifi></p>
                <p>Wifi & Internet</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><MdLocalLaundryService className="mx-auto"></MdLocalLaundryService></p>
                <p>Laundry Services</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><MdBreakfastDining className="mx-auto"></MdBreakfastDining></p>
                <p>Breakfast in Bed</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><LiaSwimmingPoolSolid className="mx-auto"></LiaSwimmingPoolSolid></p>
                <p>Swimming Pool</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><IoIosFitness className="mx-auto"></IoIosFitness></p>
                <p>Fitness Center</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><FaBath className="mx-auto"></FaBath></p>
                <p>Wellness Center</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><MdCleaningServices className="mx-auto"></MdCleaningServices></p>
                <p>Concierge Service</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><FaCarSide className="mx-auto"></FaCarSide></p>
                <p>Parking Space</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><MdCleaningServices className="mx-auto"></MdCleaningServices></p>
                <p>Room Services</p>
            </div>
            <div className="text-[#9B804E] text-2xl font-bold text-center">
                <p className="text-4xl mx-auto mb-2"><GiBarbecue className="mx-auto"></GiBarbecue></p>
                <p>Barbecue Area</p>
            </div>
        </div>
    );
};

export default Services;