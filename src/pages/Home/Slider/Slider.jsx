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
                        <div className='flex items-center'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>France</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>Rich in history, art, and cuisine. Famous for iconic landmarks like the Eiffel Tower, exquisite wines, and a diverse cultural tapestry spanning from Paris to Provence.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <div className='flex items-center'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>Italy</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>Home to ancient ruins, Renaissance masterpieces, and mouthwatering cuisine. From the canals of Venice to the ruins of Rome, a land where art, history, and beauty converge.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <div className='flex items-center'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>Spain</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>Spain, located in southwestern Europe, boasts diverse landscapes, including beaches, mountains, and vibrant cities like Madrid and Barcelona. Known for its rich history, culture, and delicious cuisine.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <div className='flex items-center'>
                            <div className='ml-[5%] font-roboto text-white'>
                                <Fade cascade delay={1000}>
                                    <h2 className='mb-6 text-3xl lg:text-5xl font-bold'>England</h2>
                                    <p className='text-lg lg:text-2xl w-full md:w-[80%] lg:w-[45%] font-barlow font-medium'>A land of lush green countryside, historic castles, and charming villages. From the majestic cliffs of Dover to the bustling streets of London, a tapestry of tradition and innovation.</p>
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