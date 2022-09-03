import { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Restaurants from './pages/restaurants/Restaurants';
import ProductDetails from './pages/productDetails/ProductDetails'
import RestaurantDetails from './pages/restaurantDetails/RestaurantDetails';
import Cart from './pages/cart/Cart';
import SlideMenu from './components/sliderMenu/SlideMenu';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

type User = boolean

function App() {
  const [slideOpen, setSlideOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const pathname = window.location.pathname

  useEffect(()=>{
    if(pathname === "/login"){
      setShowNav(false)
    }
    else if(pathname === "/register"){
      setShowNav(false)
    }
    else{
      setShowNav(true)
    }
  }, [pathname])
  const user: User = true
  return (
    <Router>
      <div className="App">
        <SlideMenu slideOpen={slideOpen} setSlideOpen={setSlideOpen}/>
          {showNav === true &&
            <header>
                <Navbar slideOpen={slideOpen} setSlideOpen={setSlideOpen}/>
            </header>
          }
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/restaurants" element={<Restaurants/>}/>
              <Route path="/product/:id" element={<ProductDetails/>}/>
              <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>
              <Route path="/cart" element={user ? <Cart/> : <Navigate to="/login"/>}/>
              <Route path="/login" element={<Login setShowNav={setShowNav}/>}/>
              <Route path="/register" element={<Register setShowNav={setShowNav}/>}/>
            </Routes> 
          </main>
          {showNav === true &&
            <footer>
                <Footer/>
            </footer>
          }
      </div>
    </Router>
  );
}

export default App;
