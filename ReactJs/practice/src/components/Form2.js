import React from "react";
import { useState } from "react";
const Form2 = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    console.log(email);
    console.log(password);
    const payload = { email, password}
    const handleSubmit = (e) => {
    }
  return (
    <div className="container bg-info">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={handleSubmit} class="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
      <h2>Payload:</h2>
      <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Form2;
