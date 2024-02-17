import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Textarea from './Textarea';
import About from './About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Default mode is 'light'
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.title = `Text Utils - ${mode === 'light' ? 'Light' : 'Dark'} Mode`;
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : '#ffffff';

    return () => {
      document.title = 'TextUtils';
      document.body.style.backgroundColor = '#ffffff'; // Reset background color on unmount
    };
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null); // Clear alert after 2 seconds
    }, 2000);
  };

  // const romoveBodyClass=() => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');

  // }

  const toggleMode = (cls) => {
    document.body.classList.remove(`bg-${mode}`);
    document.body.classList.add(`bg-${cls}`);
    setMode(cls);
    showAlert(`Switched to ${cls === 'light' ? 'Light' : 'Dark'} mode`, "success");
  };
  

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutTitle="About" mode={mode} toggleMode={toggleMode} />
        {alert && <Alert alert={alert} />}
        <div className='container my-5'>
          <Routes>
            <Route exact  path="/about" element={<About mode={mode}  />} />
            <Route exact path="/" element={<Textarea heading="Enter your text below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
