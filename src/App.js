import './App.css';
import { useState, useEffect } from 'react';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App-header">
      <h1>Contacts</h1>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
