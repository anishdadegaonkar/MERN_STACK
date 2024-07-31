import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            onLogin(username);
          } else {
            toast.error('Please enter both username and password.');
          }
    }
  return (
    <div className="card mx-auto" style={{ maxWidth: '800px', padding: '100px',marginTop:"100px" }}>
      <h2 className="card-title text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  )
}

export default Login
