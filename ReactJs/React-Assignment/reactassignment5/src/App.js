import React, { useEffect, useState } from 'react'
import './App.css';
import Register from './components/Register'
import Login from './components/Login';
import Card from './components/Card';
import Themeswitcher from './components/Themeswitcher';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
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
    toast.success('Registration successful! Please login.');
    setIsRegistered(true);
  };

  const handleLogin = (username) => {
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      setIsLoggedIn(true);
      toast.success('Login successful! Welcome back.');
    }
    else {
      alert('User not found');
      setIsRegistered(false);
      toast.error('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('users');
    setIsLoggedIn(null);
    toast.info('You have logged out.');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <Themeswitcher theme={theme} toggleTheme={toggleTheme} />
      {!isRegistered && <Register onRegister={handleRegister} />}
      {isRegistered && !isLoggedIn && <Login onLogin={handleLogin} />}
      {isRegistered && isLoggedIn && <Card onLogout={handleLogout} />}
      <ToastContainer />
    </div>
  )
}

export default App
