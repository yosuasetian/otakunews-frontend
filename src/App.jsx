import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Komunitas from "./pages/Komunitas";



function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/komunitas" element={<Komunitas />} />
      </Routes>
    </Router>
  )
}

export default App
