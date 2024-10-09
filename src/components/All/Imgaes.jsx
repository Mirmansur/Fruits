import images1 from "../../assets/Images1.png";
import images2 from "../../assets/Images2.png";
import images3 from "../../assets/Images3.png";
import images4 from "../../assets/Images4.png";

const Images = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-green-600 font-bold text-sm">Offers</div>
      <h2 className="text-xl font-bold">Best Values</h2>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div
          className="bg-cover bg-center h-60 relative group"
          style={{ backgroundImage: `url(${images1})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold text-white">Daily Essentials</h3>
            <p className="text-white">20% Off Everyday</p>
            <button className="mt-2 bg-white text-black py-2 px-4">
              SHOP NOW
            </button>
          </div>
        </div>

        <div
          className="bg-cover bg-center h-60 relative group"
          style={{ backgroundImage: `url(${images2})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold text-white">GET UP TO</h3>
            <p className="text-white">30% OFF</p>
            <button className="mt-2 bg-white text-black py-2 px-4">
              SHOP NOW
            </button>
          </div>
        </div>

        <div
          className="bg-cover bg-center h-60 relative group"
          style={{ backgroundImage: `url(${images3})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold text-white">Special Discount</h3>
            <p className="text-white">For All Items</p>
            <button className="mt-2 bg-white text-black py-2 px-4">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-8 text-white text-center py-10 bg-cover bg-center mb-20"
        style={{ backgroundImage: `url(${images4})` }}
      >
        <p className="text-2xl font-bold">Get $5 Cashback! Min Order Of $50</p>
        <p className="text-sm mt-2">USE CODE: COMBOSUPERR2A</p>
      </div>
    </div>
  );
};

export default Images;
