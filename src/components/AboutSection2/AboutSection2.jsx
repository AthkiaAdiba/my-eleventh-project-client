import about3 from '../../assets/about3.jpg';

const AboutSection2 = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16'>
                <div className='col-span-2 space-y-5'>
                    <h3 className="text-[#9B804E] text-2xl tracking-[8px] font-medium">ENDLESS INDOOR AND OUTDOOR FUN</h3>
                    <h1 className="text-5xl text-[#3D3931] font-semibold">A World of Choice and Endless Adventure Await You</h1>
                    <p className="text-[#3D3931] font-medium text-2xl">Serene Stay Hotel boasts a range of facilities to enhance your stay. Enjoy a refreshing dip in our rooftop pool, unwind with a massage at our spa, or maintain your fitness routine in our fully-equipped gym. Our on-site restaurant serves a variety of delectable dishes, crafted from the freshest ingredients, ensuring a delightful dining experience.</p>
                    <p className="text-[#3D3931] font-medium text-2xl">Located just minutes away from major attractions, shopping centers, and cultural landmarks, Serene Stay Hotel is the perfect base for exploring the vibrant city. Our concierge team is always on hand to assist with recommendations and bookings, ensuring you make the most of your stay.</p>
                </div>
                <img className='col-span-1 mb-7 lg:mb-0' src={about3} alt="" />
            </div>
        </div>
    );
};

export default AboutSection2;