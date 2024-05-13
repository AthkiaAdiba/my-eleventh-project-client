import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";


const Slider = () => {
    return (
        <div className='mb-10 mt-12 lg:mt-20'>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 3000,
                }}

            >
                <SwiperSlide>
                    <div className="slide slide1">
                        <div className='flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>Experience Comfort and Convenience</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>Embark on a journey of discovery and create lasting memories in destinations that inspire awe.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <div className='flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>Book Your Next Adventure</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>Plan your next adventure with confidence, knowing that the perfect stay awaits you.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <div className='flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>Explore Our World of Hospitality</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>Experience the warmth of hospitality and personalized service at our handpicked hotels.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <div className='flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>Luxury Awaits You</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>Indulge your senses and rejuvenate your spirit in our selection of exquisite accommodations.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;