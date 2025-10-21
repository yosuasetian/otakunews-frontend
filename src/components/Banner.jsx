import React from "react";
import "../assets/styles/Banner.css";

export default function Banner({ banners }) {
    return (
        <div className="carousel-wrapper">
            <div className="carousel">
                {banners.slice(0, 10).map((banner, index) => (
                    <a
                        key={index}
                        href={banner.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="carousel-item"
                    >
                        <img src={banner.image} alt={banner.alt || `Banner ${index + 1}`} />
                    </a>
                ))}
            </div>
        </div>
    );
}
