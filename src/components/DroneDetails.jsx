import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { drones } from '../droneData';
import "./DroneDetails.css" 


const DroneDetails = () => {
  const { id } = useParams(); 
  const drone = drones?.find(d => d.id === parseInt(id)); 

  const navigate = useNavigate()

  const gotToNewPage = () => {
    navigate("/booking");
}

  if (!drone) {
    return <p>Drone not found</p>; 
  }

  return (
    <div className="drone-details">
      <h2>{drone.name}</h2>
      <img src={drone.image} alt={drone.name} className="drone-image" />
      <p>{drone.description}</p>
      <ul>
        <li><strong>Price per day:</strong> ₦{drone.pricePerDay}</li>
        <li><strong>Availability:</strong> {drone.available ? 'Available' : 'Not Available'}</li>
        <li><strong>Max Flight Time:</strong> {drone.maxFlightTime}</li>
        <li><strong>Camera Quality:</strong> {drone.cameraQuality}</li>
        <li><strong>Weight:</strong> {drone.weight}</li>
        <li><strong>Dimensions:</strong> {drone.dimensions}</li>
        <li><strong>Features:</strong>
          <ul>
            {drone.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </li>
        <button onClick={() => gotToNewPage()} className="rent-button">Drone Booking</button>
      </ul>
     
      {/* Add more drone details as needed */}
    </div>
  );
};

export default DroneDetails;
