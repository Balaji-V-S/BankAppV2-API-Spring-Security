import { useState, useEffect } from "react";

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
      fetch(`http://localhost:8080/users/getById/${editId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Account not found");
          return res.json();
        })
        .then((data) => setEditData(data))
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
    fetch(`http://localhost:8080/users/update/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Account updated");
        setEditData(data);
      });
  };

  const handleDelete = () => {
    if (!deleteId) return alert("Enter an account ID");
    fetch(`http://localhost:8080/users/delete/${deleteId}`, { method: "DELETE" })
      .then(() => {
        alert("Account deleted");
        if (editId === deleteId) {
          setEditData(null);
          setEditId("");
        }
        setDeleteId("");
      });
  };

  const handleCreateChange = (e) => {
    setCreateData({ ...createData, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Account created");
        setCreateData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          accType: "",
          balance: "",
        });
      });
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

