import React from "react";
import BackNav from "../Components/BackNav";

export default function AllProducts() {
  const [products, setProducts] = React.useState([]);
  const [animate, setAnimation] = React.useState(false);
  const getProducts = async () => {
    const productsx = await fetch("http://localhost:27017/products");
    const productsJson = await productsx.json();
    setProducts(productsJson.products);
  };
  React.useEffect(async () => {
    await getProducts();
    await setAnimation(true);
  }, []);
  return (
    <div className={animate ? "products-home-animated" : "products-home"}>
      <BackNav />
      <div className="products">
        <div className="product-container">
          {products &&
            products.map((product) => {
              return (
                <div key={product._id} className="product-card">
                  <img
                    draggable={false}
                    className="product-image"
                    height="120"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
