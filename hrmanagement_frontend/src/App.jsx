
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./Login";
import Register from "./pages/Register";
import "./App.css";

import HrHome from "./HrHome";
import AdminHome from "./AdminHome";
import EmpHome from "./EmpHome";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/EmpHome" element={<EmpHome />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/HrHome" element={<HrHome />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
