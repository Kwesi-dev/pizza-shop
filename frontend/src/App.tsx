import { useState } from 'react';
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
import RestaurantDetails from './pages/restaurantDetails/RestaurantDetails';
import Cart from './pages/cart/Cart';
import SlideMenu from './components/sliderMenu/SlideMenu';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
function App() {
  const [slideOpen, setSlideOpen] = useState(false)
  const pathname = window.location.pathname
  return (
    <Router>
      <div className="App">
        <SlideMenu slideOpen={slideOpen} setSlideOpen={setSlideOpen}/>
        <header className={pathname === "/login" || pathname === "/register" ? "App-header display-none": "App-header"}>
            <Navbar slideOpen={slideOpen} setSlideOpen={setSlideOpen}/>
        </header>
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/restaurants" element={<Restaurants/>}/>
              <Route path="/product/:id" element={<ProductDetails/>}/>
              <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes> 
          </main>
        <footer className={pathname === "/login" || pathname === "/register" ? "App-header display-none": "App-header"}>
            <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
