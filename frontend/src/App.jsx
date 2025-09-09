import { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>
      <UserForm fetchUsers={fetchUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserList users={users} fetchUsers={fetchUsers} setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default App;
