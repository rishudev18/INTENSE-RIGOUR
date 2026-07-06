import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Trainers from "./pages/Trainers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
