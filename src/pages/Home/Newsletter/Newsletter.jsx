
const Newsletter = () => {
    return (
        <div>
            <div className="w-full bg-gray-500" style={{ backgroundImage: 'url(https://res.cloudinary.com/dv6fgvj2c/image/upload/v1715565208/gavwwubvimaifak8octg.webp)' }}>
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 font-forum bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <p className="mb-5 pt-2 text-xl antialiased text-center text-gray-100">SUBSCRIPTION</p>
                    <h1 className="mb-5 text-5xl antialiased font-semibold leading-none text-center text-gray-100">Newsletter</h1>
                    <p className="mb-7 text-white text-center text-xl">Subscribe to our newsletter for exclusive deals, travel tips, and insider <br /> insights! Stay in the loop with the latest updates on top destinations, special promotions, and personalized recommendations straight to your inbox</p>
                    <div className="flex flex-row w-72 mx-auto">
                        <input type="text" placeholder="Email Address" className="w-3/5 p-3 sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold sm:w-1/3 bg-[#9B804E] text-white">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;