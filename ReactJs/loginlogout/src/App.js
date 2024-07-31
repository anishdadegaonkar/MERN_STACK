import React, { useState,useEffect } from 'react';
import './App.css';
import Register from '../src/components/Register';
import Login from '../src/components/Login';
import Card from '../src/components/Card';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleRegister = (username) => {
    const newUser = { username };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setIsRegistered(true);
  };

  const handleLogin = (username) => {
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      setIsLoggedIn(true);
    } else {
      alert('User not registered');
      setIsRegistered(false);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container mt-5">
      {!isRegistered && <Register onRegister={handleRegister} />}
      {isRegistered && !isLoggedIn && <Login onLogin={handleLogin} />}
      {isRegistered && isLoggedIn && <Card onLogout={handleLogout} />}
    </div>
  );
};

export default App;
