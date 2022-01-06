import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css"

export default function App() {
const [darkMode,setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(prevMode => !darkMode)
}

console.log(darkMode)
  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
