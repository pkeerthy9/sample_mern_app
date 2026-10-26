import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import { Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/Contact" element={<Contact></Contact>}></Route>
      <Route path="/Register" element={<Register></Register>}></Route>
    </Routes>
    
    <Footer></Footer>
    </div>
  )
}

export default App
