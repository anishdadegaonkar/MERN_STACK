import React, { useState } from "react";
import { toast } from 'react-toastify';

const Register = ({onRegister}) => {
    const [username,setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            onRegister(username);
            toast.success('Registration successful! Please login.');
          } else {
            toast.error('Please enter both username and password.');
          }
    };
  return (
    <div
      className="card mx-auto "
      style={{ maxWidth: "800px", padding: "100px",marginTop:"100px" }}
    >
      <h2 className="card-title text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Enter username"
            value={username}
            required
          />
          
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
