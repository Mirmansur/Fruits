import { useSelector, useDispatch } from "react-redux";
import { toggleHeart } from "../../redux/slice/likeSlice";

const Like = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.liked.value);

  const handleRemove = (product) => {
    dispatch(toggleHeart(product));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Liked Products</h2>
      {liked.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-40">
          {liked.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`https://task-project-s0rr.onrender.com/images/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <h3>${product.price}</h3>
                <button
                  onClick={() => handleRemove(product)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors w-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">You have no liked products.</p>
      )}
    </div>
  );
};

export default Like;
