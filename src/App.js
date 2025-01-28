import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchUsers, addUser, updateUser, deleteUser } from './utils/api';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  const handleAddUser = async (userData) => {
    if (!userData || !userData.name || !userData.email) return; // Prevent invalid data
    try {
      const newUser = await addUser(userData);
      if (newUser) {
        setUsers((prevUsers) => [...prevUsers, newUser]); // Directly update the users state
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
  
  const handleUpdateUser = async (id, userData) => {
    if (!id || !userData || !userData.name || !userData.email) return; // Prevent invalid updates
    try {
      await updateUser(id, userData);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === parseInt(id) ? { ...user, ...userData } : user
        )
      ); // Update the state to reflect the changes in the users array
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <h1>User Management Dashboard</h1>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<UserList users={users} onDelete={handleDeleteUser} />} />
            <Route path="/add-user" element={<UserForm onSave={handleAddUser} />} />
            <Route path="/edit-user/:id" element={<UserForm users={users} onSave={handleUpdateUser} />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;
