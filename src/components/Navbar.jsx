import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../assets/styles/Navbar.css";
import Logo from "../assets/images/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Reset menu saat resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    return (
        <header className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <img src={Logo} alt="Logo" className="logo-img" />
                    <span className="logo-text">TAKUNEWS</span>
                </div>

                {/* Desktop / Mobile Menu */}
                <nav className={`nav-links ${isOpen ? "open" : ""}`}>
                    <a href="#" onClick={() => setIsOpen(false)}>Beranda</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Anime</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Manga</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Komunitas</a>
                </nav>

                {/* Wrapper untuk tombol Login + Hamburger */}
                <div className="nav-right">
                    <button
                        className="nav-btn login-btn"
                        onClick={() => { setIsOpen(false); alert("Redirect to login page"); }}
                    >
                        Login
                    </button>

                    <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
