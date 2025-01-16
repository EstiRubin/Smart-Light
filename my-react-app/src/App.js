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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        {/* <Route exact path="/" element={<Home></Home>} /> */}
          <Route path="/" element={<EmailInputPage />} />
          <Route path="/verify-code" element={<CodeVerificationPage />} />
          <Route exact path="/About" element={<About></About>} />
          <Route exact path="/AllProducts" element={<AllProducts></AllProducts>} />
          <Route exact path="/Contact" element={<Contact></Contact>} />
          <Route exact path="/Projects" element={<Projects></Projects>} />
          {/* <Route path="/" element={<ApiComponent />} /> */}
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/product/:id" element={<Product />} />

        <Route exact path="/Cart" element={<Cart />} />
        
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;