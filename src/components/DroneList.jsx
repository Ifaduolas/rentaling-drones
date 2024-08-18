import React from 'react';
import './DroneList.css'; 
import { drones } from "../droneData";
import { useNavigate } from 'react-router-dom';

const DroneList = () => {
  const navigate = useNavigate();

  const goToDroneDetails = (id) => {
    navigate(`/drones/${id}`);
  }

  return (
    <div className="drone-list">
      {drones?.map((drone) => (
        <div key={drone.id} className="drone-item">
          <img src={drone.image} alt={drone.name} className="drone-image" />
          <h3>{drone.name}</h3>
          <p>{drone.description}</p>
          <p><strong>Price per day:</strong> ${drone.pricePerDay}</p>
          <p><strong>Availability:</strong> {drone.available ? 'Available' : 'Not Available'}</p>
          <button onClick={() => goToDroneDetails(drone.id)} className="details-button">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default DroneList;
