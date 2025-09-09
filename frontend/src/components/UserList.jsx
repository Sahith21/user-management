import React from "react";
import axios from "axios";

const UserList = ({ users, fetchUsers, setSelectedUser }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user._id} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
          <button onClick={() => setSelectedUser(user)}>Edit</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
