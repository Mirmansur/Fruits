import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/slice/cartSlice";

const Card = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cards.products);

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const totalPrice = cartProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  return (
    <div className="container mx-auto p-4 min-h-screen">
      {cartProducts.length > 0 ? (
        <div className="flex space-x-8 mt-60">
          {/* Mahsulotlar qismi */}
          <div className="flex-grow space-y-4">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex justify-between items-center"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://task-project-s0rr.onrender.com/images/${product.image}`}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-700">
                      Narxi: {product.price.toLocaleString()} so'm
                    </p>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 mt-2 text-sm hover:underline"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold">
                    {(product.price / 24).toLocaleString()} so'm / oyiga
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Jami qismi */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-80">
            <h3 className="text-lg font-semibold mb-4">Jami</h3>
            <p className="text-gray-700">
              Tovarlar soni: {cartProducts.length} dona
            </p>
            <p className="text-gray-700 mb-4">
              Jami: {totalPrice.toLocaleString()} so'm
            </p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mb-3">
              Muddatli to'lovga olish
            </button>
            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">
              Karta orqali sotib olish
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">Mahsulotlar mavjud emas.</div>
      )}
    </div>
  );
};

export default Card;
