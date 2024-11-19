import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardComponent.css";


const CardComponent = ({ id, CardTitle, CardImg, CardDescriptions }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={CardImg} alt={CardTitle} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{CardTitle}</h3>
        <p className="card-description">{CardDescriptions}</p>
      </div>
    </div>
  );
};

export default CardComponent;
