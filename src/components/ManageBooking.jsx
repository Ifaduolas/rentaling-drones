import React, { useState, useEffect } from 'react';
import { bookings } from "../bookingData"; 
import './BookingManagement.css'; 

const BookingManagement = () => {
  const [bookingList, setBookingList] = useState(bookings);

  useEffect(() => {
    // Fetch bookings from an API or data source if needed
    // setBookingList(fetchedBookings);
  }, []);

  const handleDeleteBooking = (id) => {
    // Delete booking from the list
    setBookingList(bookingList.filter(b => b.id !== id));
  };

  const handleUpdateStatus = (id, newStatus) => {
    // Update the booking status
    setBookingList(
      bookingList.map(b => 
        b.id === id ? { ...b, status: newStatus } : b
      )
    );
  };

  return (
    <div className="booking-management">
      <h2>Manage Bookings</h2>
      <div className="booking-list">
        {bookingList?.map(booking => (
          <div key={booking.id} className="booking-card">
            <div className="booking-info">
              <h3>Booking ID: {booking.id}</h3>
              <p><strong>Drone:</strong> {booking.droneName}</p>
              <p><strong>User:</strong> {booking.userName}</p>
              <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {booking.status}</p>
            </div>
            <div className="booking-actions">
              <button onClick={() => handleDeleteBooking(booking.id)} className="delete-button">Delete</button>
              <select 
                value={booking.status} 
                onChange={(e) => handleUpdateStatus(booking.id, e.target.value)} 
                className="status-select"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingManagement;
