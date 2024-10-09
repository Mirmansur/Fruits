import { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../redux/slice/cartSlice";
import { useSelector } from "react-redux";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const likedProducts = useSelector((state) => state.liked.value);

  useEffect(() => {
    fetch("https://task-project-s0rr.onrender.com/product/get")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      });
  }, []);
  const isProductLiked = (productId) => {
    return likedProducts?.some((product) => product.id === productId);
  };

  const addToCarts = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };
  return (
    <section className="featured-products py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Top Featured Products
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white shadow-lg rounded-lg p-4 relative"
            >
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                15% OFF
              </div>
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-500 mb-2">Available (in stock)</p>
              <p className="text-green-500 font-bold text-xl">
                ${product.price}{" "}
                <span className="text-gray-400 line-through">
                  ${product.price + 3}
                </span>
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    -
                  </button>
                  <span>1</span>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCarts(product)}
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                >
                  <FaShoppingCart />
                </button>
              </div>
              <button
                onClick={() => isProductLiked(product.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                <FaHeart />
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
