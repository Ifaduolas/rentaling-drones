import React, { useState, useEffect } from 'react';
import { users } from "../usersData"; // Adjust the path as needed
import './ManageUser.css';

const ManageUsers = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(users); // Use the mock user data
  }, []);

  const handleDeleteUser = (id) => {
    setUserList(userList.filter(user => user.id !== id));
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <div className="user-list">
        {userList.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
