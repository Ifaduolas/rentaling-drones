import React, { useState, useEffect } from 'react';
import { bookings } from "../bookingData"; 
import './BookingManagement.css'; 

const BookingManagement = () => {
  const [bookingList, setBookingList] = useState(bookings);

  useEffect(() => {
    console.log('Booking List:', bookingList);

    // Fetch bookings from API or data source
    // setBookingList(fetchedBookings);
  }, [bookingList]);

  const handleDeleteBooking = (id) => {
    // Delete booking from the list
    setBookingList(bookingList.filter(b => b.id !== id));
  };

  return (
    <div className="booking-management">
      <h2>Manage Bookings</h2>
      <div className="booking-lists">
        {bookingList?.map(booking => (
          <div key={booking.id} className="booking-card">
            <h3>Booking ID: {booking.id}</h3>
            <p><strong>Drone:</strong> {booking.droneName}</p>
            <p><strong>User:</strong> {booking.userName}</p>
            <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingManagement;
