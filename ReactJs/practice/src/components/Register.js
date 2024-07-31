import React from "react";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  console.log(user);
  console.log(email);
  console.log(password);
  const payload = { user, email, password };
  const handleSubmit = (e) => {
    toast.success("Registration successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(password);
    // handleSubmit(payload);
  };
  // const useRef =()=>{
  //   const inputRef = useRef();
  //   const handleRef =()=>{
  //     inputRef.current.focus();
  //   }
  // }
  // useEffect(()=>{},[])
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  const style = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
    transition: "all 0.3s ease",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    transition: "all 0.3s ease",
    boxSizing: "border-box"
  };
  return (
    <div style={style}>
      <div className="container bg-light">
        <h1 className="text-center">Register</h1>
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              aria-describedby="UsernameHelp"
              placeholder="Enter User Name"
              onChange={(e) => setUser(e.target.value)}
              ref={inputRef}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-warning">
            Submit
          </button>
        </form>
        <div>
          <h2>Payload:</h2>
          <pre>{JSON.stringify(payload, null, 3)}</pre>
        </div>
      </div>
    </div>
  );
}

export default Register;
