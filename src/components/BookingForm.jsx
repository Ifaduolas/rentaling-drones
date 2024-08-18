import React, { useState } from 'react';
import './BookingForm.css'; 

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    drone: '',
    rentalStartDate: '',
    rentalEndDate: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking Submitted:', formData);
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Drone</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="drone">
          Select Drone:
          <select
            id="drone"
            name="drone"
            value={formData.drone}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Drone--</option>
            <option value="DJI Phantom 4">DJI Phantom 4</option>
            <option value="Mavic Air 2">Mavic Air 2</option>
            <option value="SwellPro Splash">SwellPro Splash</option>
            <option value="F7GB2 Drone">F7GB2 Drone</option>
            <option value="Parrot Anafi">Parrot Anafi</option>
            <option value="15kg payload">15kg payload</option>
            <option value="Autel Robotics">Autel Robotics</option>
            <option value="DJI Avata 2">DJI Avata 2</option>
          </select>
        </label>

        <label htmlFor="rentalStartDate">
          Rental Start Date:
          <input
            type="date"
            id="rentalStartDate"
            name="rentalStartDate"
            value={formData.rentalStartDate}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="rentalEndDate">
          Rental End Date:
          <input
            type="date"
            id="rentalEndDate"
            name="rentalEndDate"
            value={formData.rentalEndDate}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="additionalNotes">
          Additional Notes:
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submit-button">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
