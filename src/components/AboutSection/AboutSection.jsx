import about2 from '../../assets/about2.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16'>
                <img className='col-span-1 mb-7 lg:mb-0' src={about2} alt="" />
                <div className='col-span-2 space-y-5'>
                    <h3 className="text-[#9B804E] text-2xl tracking-[8px] font-medium">A SHORT HISTORY OF THE HOTEL</h3>
                    <h1 className="text-5xl text-[#3D3931] font-semibold">Her Enduring Journey</h1>
                    <p className="text-[#3D3931] font-medium text-2xl">Established in 2005, Serene Stay Hotel was born from a passion for exceptional hospitality and a vision to create a sanctuary where guests can feel truly at home. Our founders, John and Emily Smith, embarked on this journey with a simple yet profound belief: every guest deserves a personalized and memorable stay.</p>
                    <p className="text-[#3D3931] font-medium text-2xl">At Serene Stay Hotel, our mission is to provide unparalleled service and comfort. We strive to exceed our guests expectations by combining the warmth of home with the luxury of a five-star hotel. From the moment you step through our doors, you’ll be greeted with genuine smiles and a welcoming atmosphere, making every guest feel like a part of our family.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;