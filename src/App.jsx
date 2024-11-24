import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import Layout from "./components/Layout";
import "./styles/themes.css";
import "./styles/globals.css";
import Skills from "./pages/Skills";
import Pfa from "./pages/Pfa";
import Audiophile from "./pages/Audiophile";
import WelfareMC from "./pages/WelfareMC";
import Countries from "./pages/Countries";


const App = () => (
  <Router>
    
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/PersonalFinance" element={<Pfa />} />
        <Route path="/Audiophile" element={<Audiophile />} />
        <Route path="/WelfareMC" element={<WelfareMC />} />
        <Route path="/Countries" element={<Countries />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
