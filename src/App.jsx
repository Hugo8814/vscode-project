import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Github from "./pages/Github";

import Layout from "./components/Layout";
import "./styles/themes.css";
import "./styles/globals.css";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
