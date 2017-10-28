import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Positions from './Positions';

const App = () => (
  <div>
    <Navbar />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>
    <Positions />
    <Footer />
  </div>
);

export default App;
