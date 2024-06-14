import logo from "./logo.svg";
import "./App.css";
import ButtonLayout from "./components/ButtonLayout";
import Textprops from "./components/Textprops";
import Profileuser from "./components/Profileuser";

function App() {
  const User = { name: "John", email: "john@example.com" };
  return (
    <>
      <ButtonLayout data="SUBMIT"></ButtonLayout>
      <Textprops user={User}></Textprops>
      <Profileuser user={User}></Profileuser>
    </>
  );
}

export default App;
