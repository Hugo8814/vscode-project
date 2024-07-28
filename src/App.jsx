import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explorer from "./components/Explorer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Github from "./pages/Github";
import Titlebar from "./components/Titlebar";
import Sidebar from "./components/SideBar";

const App = () => (
  <Router>
    <Titlebar />
    <Sidebar />
    <Explorer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/github" element={<Github />} />
    </Routes>
  </Router>
);

export default App;
