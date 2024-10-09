import { useSelector } from "react-redux";

const Card = () => {
  const cartProducts = useSelector((state) => state.cards.products);

  console.log(cartProducts);
  if (!cartProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))
      ) : (
        <div>Mahsulotlar mavjud emas.</div>
      )}
    </div>
  );
};

export default Card;
