import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UserAll.css";
import { Link } from "react-router-dom";
const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <div className="container-fluid userList">
      <h1>User List</h1>
      <ul>
        {user.map((item) => (
        //   <Link to={`/userDetails/${user.id}`}>
            <li key={item.id}>{item.name}</li>
        //   </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
