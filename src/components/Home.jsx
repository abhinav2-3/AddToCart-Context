import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
  const [products] = useState(productArray);
  return (
    <div className="productContainer">
      {products.map((data, index) => (
        <SingleProduct prod={data} key={index} />
      ))}
    </div>
  );
};

export default Home;
