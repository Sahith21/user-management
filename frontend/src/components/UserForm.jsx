import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ fetchUsers, selectedUser, setSelectedUser }) => {
  const [user, setUser] = useState({ name: "", age: "", phone: "", address: "" });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await axios.put(`http://localhost:5000/users/${selectedUser._id}`, user);
      setSelectedUser(null);
    } else {
      await axios.post("http://localhost:5000/users", user);
    }
    setUser({ name: "", age: "", phone: "", address: "" });
    fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} className="UserForm">
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input style={{marginTop:"10px"}} name="age" value={user.age} onChange={handleChange} placeholder="Age" required />
      <input style={{marginTop:"10px"}} name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
      <input style={{marginTop:"10px"}} name="address" value={user.address} onChange={handleChange} placeholder="Address" required />
      <div className="UserButton"><button style={{marginTop:"10px"}} type="submit">{selectedUser ? "Update" : "Add"}</button></div>
    </form>
  );
};

export default UserForm;
