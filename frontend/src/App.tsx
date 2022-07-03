import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Restaurants from './pages/restaurants/Restaurants';
import ProductDetails from './pages/productDetails/ProductDetails'
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
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/restaurants" element={<Restaurants/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
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
