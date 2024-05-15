import { FaBuilding } from "react-icons/fa";
import about from '../../assets/about1.jpg';
import AboutSection from "../../components/AboutSection/AboutSection";
import AboutSection2 from "../../components/AboutSection2/AboutSection2";
import Services from "../../components/Services/Services";

const About = () => {
    return (
        <div className="mt-36 mx-[5%] font-forum">
            <div className="space-y-5 text-center">
                <h1><FaBuilding className="mx-auto text-[#9B804E] text-6xl"></FaBuilding></h1>
                <h2 className="text-[#9B804E] text-2xl tracking-[8px] font-medium">WELCOME TO HERITTAGE</h2>
                <h1 className="text-5xl text-[#3D3931] font-semibold">In the Heart of the South Pacific, <br /> Outstanding Views</h1>
                <p className="text-[#3D3931] font-medium text-2xl">Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, <br /> CozyStay is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, it <br /> offers stunning views of palm-lined beaches and gorgeous coral reefs.</p>
            </div>
            <img className="mt-20" src={about} alt="" />
            <div className="mt-24 lg:mt-32">
                <AboutSection></AboutSection>
            </div>
            <div className="mt-24 lg:mt-32">
                <AboutSection2></AboutSection2>
            </div>
            <div className="mt-24 lg:mt-32 mb-24 lg:mb-32">
                <Services></Services>
            </div>
        </div>
    );
};

export default About;