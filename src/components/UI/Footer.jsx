import { NavLink } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm px-32">

            <div>
                <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
                <p className="mb-2 font-medium">Subscribe</p>
                <p className="mb-4 text-gray-400">Get 10% off your first order</p>
                <div className="flex items-center border border-white rounded">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-3 py-2 w-full outline-none text-white placeholder:text-gray-400"
                    />
                    <button className="px-3 py-2 text-white hover:text-gray-300">
                        ➤
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Support</h3>
                <p className="text-gray-400">Dehradun, Uttrakhand 248007</p>
                <p className="text-gray-400 mt-2">rohan20ctbisht@gmail.com</p>
                <p className="text-gray-400 mt-2">+91 73022 87997</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Account</h3>
                <ul className="space-y-2 text-gray-400">
                    <li><NavLink to="/signup" className="hover:text-white">My Account</NavLink></li>
                    <li><NavLink to="/signup" className="hover:text-white">Login / Register</NavLink></li>
                    <li><NavLink to="/cart" className="hover:text-white">Cart</NavLink></li>
                    <li><NavLink to="/wishlist" className="hover:text-white">Wishlist</NavLink></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
                <ul className="space-y-2 text-gray-400">
                    <li><NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink></li>
                    <li><NavLink to="/terms" className="hover:text-white">Terms Of Use</NavLink></li>
                    <li><NavLink to="/faq" className="hover:text-white">FAQ</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Download App</h3>
                <p className="text-gray-400 text-xs mb-4">Save $3 with App New User Only</p>
                <div className="flex  gap-2 mb-4">
                    <img src="/Qr Code.png" alt="QR Code" className="w-24" />
                    <div className="flex flex-col gap-2">
                        <img src="/Google Play.png" alt="Google Play" className="w-24" />
                        <img src="/download-appstore.png" alt="App Store" className="w-24" />
                    </div>
                </div>
                <div className="flex gap-4 text-xl text-white">
                    <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
                    <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                    <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
}
