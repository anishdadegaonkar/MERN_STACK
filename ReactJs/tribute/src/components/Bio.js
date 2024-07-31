import React from "react";
import i from "../assects/ms.jpeg";
const Bio = (props) => {
    const Bio ={
        fontfamily: "",
        color: "#333",
        padding: "20px 20px",
        border: "1px solid #ddd",
        margin: "20px 10    0px",
        textalign: "justify",
        boxshadow: "0px 5px 10px rgba(0,0,0,0.2)",
        borderradius: "5px",
        background: "#f9f9f9",
        transition: "all 0.3s ease"
    }
  return (
    <div className="container" style={Bio}>
      <div className="row col-md-12">
        <div className="col-md-6">
          <img src={i} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="pt-4">
            {props.p1}
          </p>
          <h4>{props.h4}</h4>
          <p>
            {props.p2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
