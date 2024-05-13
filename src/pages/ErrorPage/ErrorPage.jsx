import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className="bg-[#FBF6E8] dark:bg-gray-900">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">
                        <p className="text-sm font-medium text-[#3D3931] dark:text-blue-400">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-[#3D3931] dark:text-white md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-[#9B804E] dark:text-gray-400">Sorry, the page you are looking for does not exist.Here are some helpful links:</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <Link to='/'>
                                <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#9B804E] rounded-lg shrink-0 sm:w-auto hover:bg-[#3D3931] dark:hover:bg-blue-500 dark:bg-blue-600">
                                    Take me home
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                        <img className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src="https://res.cloudinary.com/dv6fgvj2c/image/upload/v1715565208/gavwwubvimaifak8octg.webp" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;