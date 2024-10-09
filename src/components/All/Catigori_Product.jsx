import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

import logo3 from "../../assets/logo3.png";

import logo4 from "../../assets/logo4.png";

import logo5 from "../../assets/logo5.png";

import logo6 from "../../assets/logo6.png";

const categories = [
  { id: 1, title: "Vegetables & Fruits", image: logo1 },
  { id: 2, title: "Grocery & Staples", image: logo2 },
  { id: 3, title: "Dairy & Eggs", image: logo3 },
  { id: 4, title: "Beverages", image: logo4 },
  { id: 5, title: "Snacks", image: logo5 },
  { id: 6, title: "Home Care", image: logo6 },
];

const Category_Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-lg font-bold text-green-700 mb-4">
        Shop By Categories
      </h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="p-4">
            <div className="border rounded-lg p-4 text-center">
              <img
                src={category.image}
                alt={category.title}
                className="mx-auto mb-4"
                style={{ width: "80px", height: "80px" }}
              />
              <h3 className="font-semibold">{category.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category_Carousel;
