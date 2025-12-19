import React from "react";
import "./card.css";


function Card({image, title, description, subImages, link}) {
  return (
    <div
      className="user-card ocean-box" onClick={() => window.open(link, '_blank')}>
      <div className="user-card-image">
        <img src={image.src} alt={image.alt}/>
      </div>

      <div className="user-card-content">
        <div className="user-card-content-title">{title}</div>
        {description}
        <div className="user-card-subImage">
          {subImages.map((subImage, i) => (
            <img key={i} src={subImage.src} alt={subImage.alt}/>
          ))}
        </div>
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

    </div>)
}

export default Card;
