import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './smartLight/About';
import Contact from './smartLight/Contact';
import Home from './smartLight/Home';
import Navbar from './smartLight/Navbar';
import Product from './smartLight/Product';
import Projects from './smartLight/Projects';
import ProjectDetails from './smartLight/ProjectDetails';
import whatsapp from './img/whatsapp.png'
import  './css/whatsapp.css'
import Footer from './smartLight/Footer';
import EmailInputPage from './smartLight/Auth/EmailInputPage';
import CodeVerificationPage from './smartLight/Auth/CodeVerificationPage';
import ProductList from './smartLight/AllProducts';
import GoogleSignIn from './smartLight/Auth/GoogleSignIn';
import CartPage from './smartLight/pages/CartPage';
function App() {
  const whatsappNumber = "972500000000";
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>

        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/GoogleSignIn" element={<GoogleSignIn></GoogleSignIn>} />
        <Route path="/EmailInputPage" element={<EmailInputPage/>} />
        <Route path="/verify-code" element={<CodeVerificationPage />} /> 
        <Route exact path="/About" element={<About></About>} />
        <Route path="/AllProducts/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />

          <Route exact path="/Contact" element={<Contact></Contact>} />
          <Route exact path="/Projects" element={<Projects></Projects>} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />


        <Route exact path="/Cart" element={<CartPage />} />
        
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
    <Footer></Footer>

    </>
  );
}

export default App;