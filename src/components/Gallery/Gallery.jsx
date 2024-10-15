import React from "react";
import "./Gallery.css";


export default function Gallery({gallery}) {

    return (
      <div className="gallery">
        {gallery.map((item, index) => (
          <figure
            key={index}
            className={`gallery__item gallery__item--${index + 1}`}
          >
            <img src={item} className="gallery__img img-zoom" alt="Gallery" loading='eager' />
          </figure>
        ))}
      </div>
  );
}
