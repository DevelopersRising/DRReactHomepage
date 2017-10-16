import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
