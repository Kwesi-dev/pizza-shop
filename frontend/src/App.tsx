import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
