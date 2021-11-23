import React from "react";

export default function PostForm() {
  const [name, setName] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [price, setPrice] = React.useState();
  const [quantity, setQuantity] = React.useState();
  const product = {
    name,
    imgUrl,
    price,
    quantity,
  };
  const postProductToDb = async () => {
    const post = await fetch("http://localhost:27017/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const response = await post.json();
    console.log(response);
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={postProductToDb}>Submit</button>
    </div>
  );
}
