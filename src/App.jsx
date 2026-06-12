import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import FAQ from "./pages/faq/Faq.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}
