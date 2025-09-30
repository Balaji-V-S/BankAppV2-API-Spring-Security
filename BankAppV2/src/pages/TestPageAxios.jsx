
import { useState, useEffect } from "react";
import axios from "axios";

function BankAccountManager() {
  const [editId, setEditId] = useState("");
  const [editData, setEditData] = useState(null);
  const [createData, setCreateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    accType: "",
    balance: "",
  });
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    if (editId) {
      axios
        .get(`http://localhost:8080/users/getById/${editId}`)
        .then((res) => setEditData(res.data))
        .catch(() => setEditData(null));
    } else {
      setEditData(null);
    }
  }, [editId]);

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    if (!editId) return alert("Enter an account ID");

    axios
      .put(`http://localhost:8080/users/update/${editId}`, editData)
      .then((res) => {
        alert("Account updated");
        setEditData(res.data);
      })
      .catch((err) => alert("Update failed: " + err.message));
  };

  const handleDelete = () => {
    if (!deleteId) return alert("Enter an account ID");

    axios
      .delete(`http://localhost:8080/users/delete/${deleteId}`)
      .then(() => {
        alert("Account deleted");
        if (editId === deleteId) {
          setEditData(null);
          setEditId("");
        }
        setDeleteId("");
      })
      .catch((err) => alert("Delete failed: " + err.message));
  };

  const handleCreateChange = (e) => {
    setCreateData({ ...createData, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    axios
      .post("http://localhost:8080/users", createData)
      .then((res) => {
        alert("Account created");
        setCreateData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          accType: "",
          balance: "",
        });
      })
      .catch((err) => alert("Create failed: " + err.message));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Edit / Update Account</h2>
      <input
        type="number"
        placeholder="Enter Account ID"
        value={editId}
        onChange={(e) => setEditId(e.target.value)}
      />
      {editData && (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
          <input
            name="firstName"
            value={editData.firstName}
            onChange={handleEditChange}
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={editData.lastName}
            onChange={handleEditChange}
            placeholder="Last Name"
          />
          <input
            name="email"
            value={editData.email}
            onChange={handleEditChange}
            placeholder="Email"
          />
          <input
            name="phone"
            value={editData.phone}
            onChange={handleEditChange}
            placeholder="Phone"
          />
          <input
            name="accType"
            value={editData.accType}
            onChange={handleEditChange}
            placeholder="Account Type"
          />
          <input
            name="balance"
            type="number"
            value={editData.balance}
            onChange={handleEditChange}
            placeholder="Balance"
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      <h2 style={{ marginTop: "40px" }}>Delete Account</h2>
      <input
        type="number"
        placeholder="Enter Account ID"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>

      <h2 style={{ marginTop: "40px" }}>Create Account</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <input
          name="firstName"
          value={createData.firstName}
          onChange={handleCreateChange}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={createData.lastName}
          onChange={handleCreateChange}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={createData.email}
          onChange={handleCreateChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={createData.phone}
          onChange={handleCreateChange}
          placeholder="Phone"
        />
        <input
          name="accType"
          value={createData.accType}
          onChange={handleCreateChange}
          placeholder="Account Type"
        />
        <input
          name="balance"
          type="number"
          value={createData.balance}
          onChange={handleCreateChange}
          placeholder="Balance"
        />
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default BankAccountManager;
