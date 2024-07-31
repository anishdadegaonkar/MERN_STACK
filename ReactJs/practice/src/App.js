import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import Button from "./components/Button";
// import Calculator from "./components/Calculator";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import GreetingByClass from "./components/GreetingByClass";
// import GreetingByFunction from "./components/GreetingByFunction";
// import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
// import Form2 from "./components/Form2";
import Card from "./components/Card";
// import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard";
import Axios from "./components/Axios";
import UserAll from "./userDetails/UserAll";

function App() {
  // const txtalign = {
  //   textAlign: "center",
  // };
  // const fruits = ["Apple", "Mangoo", "Banana"];
  // const cars = ["Swift", "Honda", "Tata"];
  const products = [
    {
      prodId: 1,
      prodName: "Surfexcel",
      prodDescription: "Dag ache hai",
      prodPrice: 100,
    },
    {
      prodId: 2,
      prodName: "Ghadi",
      prodDescription: "Phale Istemal kare phir viswas kare",
      prodPrice: 200,
    },
    {
      prodId: 3,
      prodName: "Tide",
      prodDescription: "Kyo Chauk gaye na",
      prodPrice: 300,
    },
  ];
  return (
    <>
      <Navbar />
      {/* <Register/> */}
      {/* <Dashboard/> */}
      {/* <Axios/> */}
      <UserAll/>
      {/* <Routes>
        <Route path="/card" element={<Card data={products} />} />
      </Routes> */}
      <ToastContainer/>
    </>
  );
}

export default App;
