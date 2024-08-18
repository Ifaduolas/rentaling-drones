import React from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

 const gotToNewPage = () => {
    navigate("/bookingManagement")
  }

  const NewPage = () => {
    navigate("/manageBooking")
  }

  const goToNewPage = () => {
    navigate("/manageUser")
  }



  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-section">
        <div className="dashboard-card">
          <h2>Manage Drones</h2>
          <p>View, add, or update drones available for rental.</p>
         <button onClick={() => gotToNewPage()} className="button-manage">Go to Drones</button>
        </div>
        <div className="dashboard-card">
          <h2>Manage Bookings</h2>
          <p>View and manage customer bookings.</p>
          <button onClick={() => NewPage()} className="button-manage">Go to Bookings</button>
        </div>
        <div className="dashboard-card">
          <h2>Manage Users</h2>
          <p>View and manage registered users.</p>
          <button onClick={() => goToNewPage()} className="button-manage">Go to Users</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

