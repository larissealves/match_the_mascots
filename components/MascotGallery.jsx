import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/mascot-gallery.css';


export default function MascotGallery() {
  const images = import.meta.glob('/src/assets/images/board-itens/*.png', { eager: true });

  const imageList = Object.entries(images).map(([path, module]) => {
    const fileName = path.split('/').pop().replace('.png', '');
    return {
      url: module.default,
      name: fileName
    };
  });

  return (
    <div className="mascot-gallery-page">
      <section className="sessao">
        <Link to="/" className="link-neon">← Back to Home</Link>
      </section>
      <h1 className="title">Mascot Gallery</h1>
      <p className="subtitle">✨ Explore all the mascots available in this game ✨</p>

      <div className="mascot-grid">
        {imageList.map((img, index) => (
          <div key={index} className="mascot-card">
            <img src={img.url} alt={img.name} />
            <p className="mascot-name">{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
