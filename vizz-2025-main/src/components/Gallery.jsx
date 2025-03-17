"use client";
import React, { useState } from "react";
import styles from "../styles/components/gallery.module.css";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("sunglasses");

  const categories = {
    sunglasses: [
      "/images/sunglasses/sunglass1.webp",
      "/images/sunglasses/sunglass2.webp",
      "/images/sunglasses/sunglass3.webp",
      "/images/sunglasses/sunglass4.webp",
      "/images/sunglasses/sunglass5.webp",
      "/images/sunglasses/sunglass6.webp",
    ],
    glasses: [
      "/images/glasses/glass1.webp",
      "/images/glasses/glass2.webp",
      "/images/glasses/glass3.webp",
      "/images/glasses/glass4.webp",
      "/images/glasses/glass5.webp",
      "/images/glasses/glass6.webp",
    ],
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="destaques" className={styles.gallery}>
      <h2 className={styles.galleryTitle}>Galeria de Fotos</h2>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.categoryButton} ${
            selectedCategory === "sunglasses" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("sunglasses")}
        >
          Óculos de Sol
        </button>
        <button
          className={`${styles.categoryButton} ${
            selectedCategory === "glasses" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("glasses")}
        >
          Óculos de Grau
        </button>
      </div>
      <div className={styles.mainImageContainer}>
        <img
          src={categories[selectedCategory][currentImageIndex]}
          alt={`Imagem ${currentImageIndex + 1}`}
          className={styles.mainImage}
        />
      </div>
      <div className={styles.thumbnailContainer}>
        {categories[selectedCategory].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${
              index === currentImageIndex ? styles.activeThumbnail : ""
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;