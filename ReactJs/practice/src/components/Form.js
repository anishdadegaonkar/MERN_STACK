import React, { useState } from "react";
import Register from "./Register";
import { ToastContainer, toast } from 'react-toastify';

function Form() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    console.log(email);
    console.log(password);
    const payload = { email, password}
    const handleSubmit = (e) => {
      e.preventDefault();
      if(email != '' && password != '') {
        setIsLoggedIn(true);
        toast.success('Registration successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      }
    console.log(password);
    }
  return (
    <div className="container bg-primary">
      <h1>Login Form</h1>
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-dark">
          Submit
        </button>
      </form>
      <div>
        <h2>Payload:</h2>
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
      {isLoggedIn? <Register/> : <p>Login failed</p>}
      <ToastContainer/>
    </div>
  );
}

export default Form;
