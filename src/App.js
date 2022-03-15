import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

export default function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "myApp - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "myApp - Light mode";
    }
  }
  const [mode, setMode] = useState('light');
  return (
    <>

      <Navbar title="Sagar" aboutRename="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>

        {/* <About /> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />

      </div>

    </>
  );
}
