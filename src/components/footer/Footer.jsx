import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import {
  FaApple,
  FaGooglePlay,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <p className="mb-2">
            <span className="font-bold">Address:</span> 60-49 road 11378 New
            York
          </p>
          <p className="mb-2">
            <PhoneOutlined className="mr-2" /> <span>Phone:</span> +65 11188 888
          </p>
          <p>
            <MailOutlined className="mr-2" /> <span>Email:</span>{" "}
            hello@colorlib.com
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">USEFUL LINK</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About our shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our sitemap
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">USEFUL LINK</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                PRODUCT
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CONTACT
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                STORES
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Download App</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#">
              <FaApple className="text-3xl text-white hover:text-gray-400" />
            </a>
            <a href="#">
              <FaGooglePlay className="text-3xl text-white hover:text-gray-400" />
            </a>
          </div>
          <h3 className="text-xl font-bold mb-4">Sign up for our newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 w-full rounded-l-md text-gray-900 outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 px-6">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          Copyright ©2021 all rights reserved | this template is made with{" "}
          <span className="text-green-600">💚</span> by <strong>logo</strong>
        </p>
        <div className="flex space-x-4">
          <FaCcVisa className="text-3xl text-white hover:text-gray-400" />
          <FaCcMastercard className="text-3xl text-white hover:text-gray-400" />
          <FaCcPaypal className="text-3xl text-white hover:text-gray-400" />
          <FaCcAmex className="text-3xl text-white hover:text-gray-400" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
