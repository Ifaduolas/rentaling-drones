import React, { useState, useEffect } from 'react';

const AddDroneForm = ({ addDrone, editingDrone, updateDrone }) => {
  const [drone, setDrone] = useState({
    id: '',
    name: '',
    description: '',
    pricePerDay: '',
    available: true,
    image: ''
  });

  useEffect(() => {
    if (editingDrone) {
      setDrone(editingDrone);
    }
  }, [editingDrone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrone({ ...drone, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingDrone) {
      updateDrone(drone);
    } else {
      addDrone({ ...drone, id: Date.now() });
    }
    setDrone({
      id: '',
      name: '',
      description: '',
      pricePerDay: '',
      available: true,
      image: ''
    });
  };

  return (
    <form className="drone-form" onSubmit={handleSubmit}>
      <h3>{editingDrone ? 'Edit Drone' : 'Add New Drone'}</h3>
      <input
        type="text"
        name="name"
        value={drone.name}
        onChange={handleChange}
        placeholder="Drone Name"
        required
      />
      <textarea
        name="description"
        value={drone.description}
        onChange={handleChange}
        placeholder="Drone Description"
        required
      />
      <input
        type="number"
        name="pricePerDay"
        value={drone.pricePerDay}
        onChange={handleChange}
        placeholder="Price Per Day"
        required
      />
      <input
        type="text"
        name="image"
        value={drone.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          name="available"
          checked={drone.available}
          onChange={() => setDrone({ ...drone, available: !drone.available })}
        />
      </label>
      <button type="submit">{editingDrone ? 'Update Drone' : 'Add Drone'}</button>
    </form>
  );
};

export default AddDroneForm;
