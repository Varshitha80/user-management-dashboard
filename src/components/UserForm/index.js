import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';

const UserForm = ({ onSave, users = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (id) {
      const existingUser = users.find((user) => user.id === parseInt(id));
      if (existingUser) {
        setUser(existingUser); // Set the existing user data when editing
      }
    }
  }, [id, users]); // Ensure to reload user when `users` or `id` change

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !user.name || !user.email) {
      alert('Please provide both name and email');
      return;
    }

    if (id) {
      onSave(id, user); // Update user
    } else {
      onSave(user); // Add new user
    }

    navigate('/');
  };

  return (
    <div className="user-form">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{id ? 'Update User' : 'Add User'}</button>
      </form>
    </div>
  );
};

export default UserForm;
