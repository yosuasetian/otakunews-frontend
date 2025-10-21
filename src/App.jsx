import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Beranda from "./pages/Beranda";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Komunitas from "./pages/Komunitas";

const banners = [
  { image: "/banners/banner1.jpg", link: "https://example.com/1", alt: "Banner 1" },
  { image: "/banners/banner2.jpg", link: "https://example.com/2", alt: "Banner 2" },
  { image: "/banners/banner3.jpg", link: "https://example.com/3", alt: "Banner 3" },
  { image: "/banners/banner1.jpg", link: "https://example.com/1", alt: "Banner 1" },
  { image: "/banners/banner2.jpg", link: "https://example.com/2", alt: "Banner 2" },
  { image: "/banners/banner3.jpg", link: "https://example.com/3", alt: "Banner 3" },
  { image: "/banners/banner1.jpg", link: "https://example.com/1", alt: "Banner 1" },
  { image: "/banners/banner2.jpg", link: "https://example.com/2", alt: "Banner 2" },
  { image: "/banners/banner3.jpg", link: "https://example.com/3", alt: "Banner 3" },
  { image: "/banners/banner1.jpg", link: "https://example.com/1", alt: "Banner 1" },
  { image: "/banners/banner2.jpg", link: "https://example.com/2", alt: "Banner 2" },
  { image: "/banners/banner3.jpg", link: "https://example.com/3", alt: "Banner 3" },
];

function App() {

  return (
    <Router>
      <Navbar />
      {/* Banner carousel */}
      <Banner banners={banners} />

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
