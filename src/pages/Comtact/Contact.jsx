import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="pt-28 lg:pt-36 pb-20 bg-[#FBF6E8]">
            <section className="py-6 text-white font-forum">
                <div className="grid grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-3 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6 col-span-1" style={{ backgroundImage: 'url(https://res.cloudinary.com/dv6fgvj2c/image/upload/v1715700013/fnxcs0dxeftd6slam9d1.jpg)' }}>
                        <div className="flex justify-center items-center h-full">
                            <div>
                                <h1 className="text-4xl font-bold">Get in touch</h1>
                                <p className="pt-2 pb-4 text-lg">Fill in the form to start a conversation</p>
                                <div className="space-y-4">
                                    <p className="flex items-center text-lg">
                                        <FaLocationDot className="mr-2"></FaLocationDot>
                                        <span>Level-9, 50, Banani Tower, Banani, Dhaka</span>
                                    </p>
                                    <p className="flex items-center text-lg">
                                        <MdCall className="mr-2"></MdCall>
                                        <span>123456789</span>
                                    </p>
                                    <p className="flex items-center text-lg">
                                        <MdEmail className="mr-2"></MdEmail>
                                        <span>herittage@business.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col col-span-2 py-6 space-y-6 md:py-0 md:px-6 text-[#3D3931]">
                        <h1 className="text-[#9B804E] text-xl tracking-[10px]">REACH US</h1>
                        <h1 className="text-[#3D3931] text-6xl">Contact Form</h1>
                        <p className="text-[#3D3931] font-medium text-xl">We are here to assist you with any questions or concerns you may have. Whether you need help with a booking, have a question about our services. Our dedicated customer support team is ready to help.</p>
                        <label className="block">
                            <span className="mb-1 text-2xl font-medium">Full name</span>
                            <input type="text" placeholder="Full Name*" className="p-2 w-full bg-[#FBF6E8] border-2 border-[#9B804E] input-bordered text-xl" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-2xl font-medium">Email Address</span>
                            <input type="text" placeholder="Email Address*" className="p-2 w-full bg-[#FBF6E8] border-2 border-[#9B804E] input-bordered text-xl" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-2xl font-medium">Message</span>
                            <textarea rows="3" placeholder="Your Message*" className="block w-full textarea-bordered border-2 border-[#9B804E] bg-[#FBF6E8] text-xl"></textarea>
                        </label>
                        <div>
                            <button className="w-28 bg-[#9B804E] p-3 text-white text-2xl">Send</button>
                        </div>
                        {/* <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button> */}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;