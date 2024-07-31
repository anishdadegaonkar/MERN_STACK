import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userimage from '../user.jpeg'
import './Users.css'
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [user]);
  return (
    <div className="container col-md-9">
      <div className="card mb-3 mt-5 cardhover" style={{maxWidth:"640px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={userimage} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                {user.email}
              </p>
              <p className="card-text">
                {user.phone}
              </p>
              <p className="card-text">
                {user.website}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
