import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './smartLight/About';
import AllProducts from './smartLight/AllProducts';
import Contact from './smartLight/Contact';
import Home from './smartLight/Home';
import Navbar from './smartLight/Navbar';
import Product from './smartLight/Product';
import Projects from './smartLight/Projects';
import ApiComponent from './smartLight/Projects';
import ProjectDetails from './smartLight/ProjectDetails';
import EmailInputPage from './smartLight/Auth/pages1/EmailInputPage';
import CodeVerificationPage from './smartLight/Auth/pages1/CodeVerificationPage';
import Cart from './smartLight/Cart';
import whatsapp from './img/whatsapp.png'
import  './css/whatsapp.css'
function App() {
  const whatsappNumber = "972500000000";
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route exact path="/home" element={<Home></Home>} />
          <Route path="/" element={<EmailInputPage />} />
          <Route path="/verify-code" element={<CodeVerificationPage />} />
          <Route exact path="/About" element={<About></About>} />
          <Route exact path="/AllProducts" element={<AllProducts></AllProducts>} />
          <Route exact path="/Contact" element={<Contact></Contact>} />
          <Route exact path="/Projects" element={<Projects></Projects>} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/product/:id" element={<Product />} />

        <Route exact path="/Cart" element={<Cart />} />
        
        </Routes>
      </BrowserRouter>
      <a
      href={`https://wa.me/${whatsappNumber}?text=שלום!%20אני%20מתעניין/ת%20בתאורה%20אפשר%20לקבל%20פרטים%20נוספים?`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-button"
    >
      <img
        src={whatsapp}
        alt="WhatsApp Icon"
        className="whatsapp-icon"
      />
    </a>

    </>
  );
}

export default App;