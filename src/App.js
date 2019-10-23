import React from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from './components/popup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Popup 
          defaultText="Hello"
          popupsText="I'm here"
          position="top"
        ></Popup>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
