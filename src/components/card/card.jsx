import React from "react";
import "./card.css";

function Card({subImages}) {
  return (
    <div
      className="user-card ocean-box">
      <div className="user-card-image">
        <img src="/tensoract.png" alt="Tensoract"/>
      </div>

      <div className="user-card-content">
        <div className="user-card-content-title">Tensoract</div>
        Tensoract is a scalable AI data labeling and training platform built to accelerate supervised learning for ML
        and LLM systems. By unifying annotation, training, and evaluation workflows, it significantly reduces model
        iteration time and improves training efficiency in production environments.
        <div className="user-card-subImage">
          {subImages.map((src, i) => (
            <img key={i} src={src} alt={`Subimage ${i}`}/>
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
