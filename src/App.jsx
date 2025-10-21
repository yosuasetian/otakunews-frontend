import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

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
    <>
      <Navbar />
      {/* Banner carousel */}
      <Banner banners={banners} />

      <main>
        <h1>Konten utama website</h1>
        <p>Ini halaman demo.</p>
      </main>
    </>
  )
}

export default App
