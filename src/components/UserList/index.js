import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const UserList = ({ users, onDelete }) => {
  return (
    <div className="user-list">
      <h2>User Management</h2>
      <Link to="/add-user" className="add-user-btn">Add User</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <div>
              <Link to={`/edit-user/${user.id}`} className="edit-btn">Edit</Link>
              <button onClick={() => onDelete(user.id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
