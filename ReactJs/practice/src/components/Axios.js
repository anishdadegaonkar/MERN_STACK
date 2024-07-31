import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const response = axios
      .get("https://fakestoreapi.com/products?limit=3")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div class="card-deck">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={product.image}
              class="card-img-top"
              alt="..."
              style={{ width: "100px" }}
            />
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.description}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Axios;
