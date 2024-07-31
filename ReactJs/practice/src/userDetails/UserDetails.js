import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const {id} = useParams()
  const [user,setUser] = useState([])
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  return (
    <div>
      <div class="card mb-3" style={{maxWidth: "540px"}}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={user.image} class="card-img" alt="." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
