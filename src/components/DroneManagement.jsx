import React, { useState, useEffect } from 'react';
import { drones } from '../droneData'; // Import your drone data or API service
import './DroneManagement.css'; // Import your CSS for styling

const DroneManagement = () => {
  const [droneList, setDroneList] = useState(drones);
  const [editingDrone, setEditingDrone] = useState(null);
  const [newDrone, setNewDrone] = useState({ name: '', description: '', image: '', pricePerDay: '', available: true });

  useEffect(() => {
    // Fetch drones from API or data source
    // setDroneList(fetchedDrones);
  }, []);

  const handleAddDrone = () => {
    // Add new drone to the list
    setDroneList([...droneList, { ...newDrone, id: Date.now() }]);
    setNewDrone({ name: '', description: '', image: '', pricePerDay: '', available: true });
  };

  const handleEditDrone = (drone) => {
    setEditingDrone(drone);
  };

  const handleSaveEdit = () => {
    // Save changes to the drone
    setDroneList(droneList.map(d => (d.id === editingDrone.id ? editingDrone : d)));
    setEditingDrone(null);
  };

  const handleDeleteDrone = (id) => {
    // Delete drone from the list
    setDroneList(droneList.filter(d => d.id !== id));
  };

  return (
    <div className="drone-management">
      <h2>Manage Drones</h2>
      <div className="add-drone">
        <h3>Add New Drone</h3>
        <input type="text" placeholder="Name" value={newDrone.name} onChange={(e) => setNewDrone({ ...newDrone, name: e.target.value })} />
        <input type="text" placeholder="Description" value={newDrone.description} onChange={(e) => setNewDrone({ ...newDrone, description: e.target.value })} />
        <input type="text" placeholder="Image URL" value={newDrone.image} onChange={(e) => setNewDrone({ ...newDrone, image: e.target.value })} />
        <input type="number" placeholder="Price per day" value={newDrone.pricePerDay} onChange={(e) => setNewDrone({ ...newDrone, pricePerDay: e.target.value })} />
        <label>
          Available
          <input type="checkbox" checked={newDrone.available} onChange={(e) => setNewDrone({ ...newDrone, available: e.target.checked })} />
        </label>
        <button onClick={handleAddDrone}>Add Drone</button>
      </div>

      <div className="drone-list">
        {droneList.map(drone => (
          <div key={drone.id} className="drone-item">
            <img src={drone.image} alt={drone.name} />
            <h3>{drone.name}</h3>
            <p>{drone.description}</p>
            <p><strong>Price per day:</strong> ${drone.pricePerDay}</p>
            <p><strong>Availability:</strong> {drone.available ? 'Available' : 'Not Available'}</p>
            <button onClick={() => handleEditDrone(drone)}>Edit</button>
            <button onClick={() => handleDeleteDrone(drone.id)}>Delete</button>
          </div>
        ))}
      </div>

      {editingDrone && (
        <div className="edit-drone">
          <h3>Edit Drone</h3>
          <input type="text" value={editingDrone.name} onChange={(e) => setEditingDrone({ ...editingDrone, name: e.target.value })} />
          <input type="text" value={editingDrone.description} onChange={(e) => setEditingDrone({ ...editingDrone, description: e.target.value })} />
          <input type="text" value={editingDrone.image} onChange={(e) => setEditingDrone({ ...editingDrone, image: e.target.value })} />
          <input type="number" value={editingDrone.pricePerDay} onChange={(e) => setEditingDrone({ ...editingDrone, pricePerDay: e.target.value })} />
          <label>
            Available
            <input type="checkbox" checked={editingDrone.available} onChange={(e) => setEditingDrone({ ...editingDrone, available: e.target.checked })} />
          </label>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
    </div>
  );
};

export default DroneManagement;
