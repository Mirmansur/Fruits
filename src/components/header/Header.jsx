import { Input, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  PhoneOutlined,
  HeartOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const menu = (
  <Menu>
    <Menu.Item key="1">Profile</Menu.Item>
    <Menu.Item key="2">Logout</Menu.Item>
  </Menu>
);

const Header = () => {
  const liked = useSelector((state) => state.liked.value);
  const { products } = useSelector((state) => state.cards);
  let boxs = products.length;
  let son = liked.length;
  return (
    <div className="w-full fixed top-0 left-0 ring-0 z-10 bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white flex flex-col sm:flex-row justify-between items-center px-6 py-2">
        <div className="flex items-center text-xs sm:text-base">
          <MailOutlined className="mr-2" />
          <span>Hello@colorlib.com</span>
          <span className="ml-4 hidden sm:inline">
            Free Shipping for all orders of $99
          </span>
        </div>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            LOGO
          </Link>
          <Dropdown
            overlay={menu}
            trigger={["hover"]}
            className="hidden sm:block"
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="hover:text-gray-400"
            >
              <span>Gurugram</span>
            </a>
          </Dropdown>
        </div>

        <div className="w-full sm:w-1/2 mx-0 sm:mx-8 my-4 sm:my-0">
          <Input.Search
            placeholder="Search for products..."
            size="large"
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center">
            <PhoneOutlined className="mr-2" />
            <span>1800-000-000</span>
          </div>
          <Link to="/like" className="flex items-center hover:text-gray-500">
            <HeartOutlined className="mr-2" />
            <span className="bg-green-600 text-white rounded-full text-xs p-1 px-2 text-center shadow-md font-bold">
              {son}
            </span>
          </Link>
          <Dropdown overlay={menu} trigger={["hover"]} className="ml-4">
            <a
              onClick={(e) => e.preventDefault()}
              className="flex items-center hover:text-gray-500"
            >
              <UserOutlined className="mr-2" />
              <span>John Doe</span>
            </a>
          </Dropdown>
          <Link to="/card" className="flex items-center hover:text-gray-500">
            <ShoppingCartOutlined className="mr-2" />
            <span className="bg-green-600 text-white rounded-full text-xs p-1 px-2 text-center shadow-md font-bold">
              {boxs}
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-white shadow-md">
        <div className="flex justify-center space-x-4 sm:space-x-8 py-4 text-sm sm:text-base">
          <a href="#" className="text-green-600 font-bold">
            HOME
          </a>
          <a href="#" className="hover:text-green-600">
            PRODUCT
          </a>
          <a href="#" className="hover:text-green-600">
            STORES
          </a>
          <a href="#" className="hover:text-green-600">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
