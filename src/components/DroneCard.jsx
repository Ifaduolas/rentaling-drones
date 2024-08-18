import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DroneCard.css'; 

const DroneCard = ({ drone }) => {

const navigate = useNavigate()

const gotToNewPage = () => {
    navigate("/droneList");
}
  return (
    <div className="drone-card">
      <img src={drone?.image} alt={drone.name} className="drone-image" />
      <div className="drone-info">
        <h3>{drone?.name}</h3>
        <p>{drone.description}</p>
        <p><strong>Price per Day:</strong> ₦{drone.pricePerDay}</p>
        <p><strong>Availability:</strong> {drone.available ? 'Available' : 'Not Available'}</p>
        <button onClick={() => gotToNewPage()} className="rent-button">Drone Details</button>
      </div>
    </div>
  );
};

export default DroneCard;
