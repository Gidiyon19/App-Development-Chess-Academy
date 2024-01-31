// AdminPage.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    chessAcademyName: '',
    phoneNumber: '',
    email: '',
  });

  const [playerList, setPlayerList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new player to the list
    setPlayerList([...playerList, formData]);
    // Clear the form data for the next entry
    setFormData({
      name: '',
      chessAcademyName: '',
      phoneNumber: '',
      email: '',
    });
  };

  const handleDelete = (index) => {
    // Remove the player at the specified index
    const updatedPlayerList = [...playerList];
    updatedPlayerList.splice(index, 1);
    setPlayerList(updatedPlayerList);
  };

  return (
    <div className="admin-page-container">
      <h1>Chess Player Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Chess Academy Name:
          <input type="text" name="chessAcademyName" value={formData.chessAcademyName} onChange={handleChange} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <button type="submitii">Add Details</button>
      </form>

      <div className="player-list">
        <h2>Player List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Chess Academy</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {playerList.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.chessAcademyName}</td>
                <td>{player.phoneNumber}</td>
                <td>{player.email}</td>
                <td>
                  <button type="submitii" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
