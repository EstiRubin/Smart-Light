import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './smartLight/About';
import AllProducts from './smartLight/AllProducts';
import Contact from './smartLight/Contact';
import Home from './smartLight/Home'; 
import Navbar from './smartLight/Navbar';
import Product from './smartLight/Product';
import Projects from './smartLight/Projects';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/About" element={<About></About>} />
          <Route exact path="/AllProducts" element={<AllProducts></AllProducts>} />
          <Route exact path="/Contact" element={<Contact></Contact>} />
          <Route exact path="/Product" element={<Product></Product>} />
          <Route exact path="/Projects" element={<Projects></Projects>} />
        </Routes>
      </BrowserRouter>
        

    </>
  );
}

export default App;
