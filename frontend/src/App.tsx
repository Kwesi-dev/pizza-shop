import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
        {/* <Home/> */}
        <About/>
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
