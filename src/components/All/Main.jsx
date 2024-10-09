import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import Category_Carousel from "./Catigori_Product";
import Images from "../All/Imgaes";
import ProductList from "./Product";

const products = [
  { id: 1, discount: "6% OFF", title: "Beverage", image: img1 },
  { id: 2, discount: "10% OFF", title: "Nuts & Snacks", image: img2 },
  { id: 3, discount: "6% OFF", title: "Fresh Vegetables", image: img3 },
  { id: 4, discount: "25% OFF", title: "Fresh Fruits", image: img4 },
  { id: 5, discount: "15% OFF", title: "Eggs & Dairy", image: img5 },
];

const Main = () => {
  return (
    <div className="Overall flex flex-col mt-40">
      <div className="grid grid-cols-5 gap-4 p-6">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="text-center text-white">
                <p className="text-sm">{product.discount}</p>
                <h3 className="text-xl font-bold">{product.title}</h3>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Category_Carousel />
      <ProductList />
      <Images />
    </div>
  );
};

export default Main;
