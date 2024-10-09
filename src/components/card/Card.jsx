import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/slice/cartSlice";

const Card = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cards.products);

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <div className="container mx-auto p-4  min-h-screen">
      {cartProducts.length > 0 ? (
        <div className="space-y-4 mt-60 ">
          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex justify-between items-center"
            >
              <div className="flex flex-col space-y-2">
                <img
                  src={`https://task-project-s0rr.onrender.com/images/${product.image}`}
                  alt={product.name}
                  style={{ width: "40%" }}
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700">Narxi: {product.price} so'm</p>
                <p className="text-gray-700">Miqdori: {product.quantity}</p>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-white bg-red-500 rounded-md py-1 px-3 hover:bg-red-600 transition-colors"
                >
                  O'chirish
                </button>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  {Math.round(product.price / 24)} so'm / oyiga
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">Mahsulotlar mavjud emas.</div>
      )}
    </div>
  );
};

export default Card;
