import logo from '../../assets/logo-light.svg'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer py-16 px-7 lg:px-40 text-lg font-forum text-white" style={{ backgroundImage: 'url(https://res.cloudinary.com/dv6fgvj2c/image/upload/v1715669560/alkv2zak2rpude9rikvh.jpg)' }}>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Office Address</h6>
                    <p>Level-9, 50, Banani Tower, Banani, Dhaka</p>
                    <p>Support:<a className="link link-hover">herittage@gmail.com</a></p>
                    <p>HelpLine:<a className="link link-hover">01734569737</a></p>
                </nav>
                <div>
                    <aside>
                        <img src={logo} alt="" />
                        <p>Copyright © 2024 - All right reserved</p>
                    </aside>
                    <nav>
                        <div className="grid grid-flow-col gap-4 text-3xl">
                            <a><FaTwitter></FaTwitter></a>
                            <a><FaYoutube></FaYoutube></a>
                            <a><FaFacebookF></FaFacebookF></a>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;