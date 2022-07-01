import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from './pages/contact/Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Navbar/>
        </header>
          <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          </main>
        <footer>
            <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
