import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  const cardstyle ={
    height: "35rem",
    width: "20rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,.1)",
    borderRadius: "5px"
  }
  const image ={
    width: "100%",
    height: "300px",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "1rem"
  }
  return (
    <div>
      {/* <h1>Dashboard</h1>
      <div>
        {products.map(product=>(
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title}/>
          </div>
        ))}
      </div> */}
      <div className="container-fluid">
        <div className="row justify-content-around">
          {products.map((product) => (
            <div style={cardstyle} key={product.id} className="card col-sm-6">
              <img
                className="card-img-top"
                src={product.image}
                alt="Card image cap"
                style={image}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.title}</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
