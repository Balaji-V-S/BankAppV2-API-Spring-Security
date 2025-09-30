import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function CustomerForm({ list, handleAdd, handleUpdate }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    Acctype: '',
    balance: 0,
  });

  useEffect(() => {
    if (isEditMode) {
      const customerToEdit = list.find(c => c.id == id);
      if (customerToEdit) {
        setFormData(customerToEdit);
      }
    }
  }, [id, list, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Handle number inputs correctly
    const finalValue = type === 'number' ? parseFloat(value) : value;
    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      handleUpdate(formData);
      alert('Customer updated!');
    } else {
      handleAdd(formData);
      alert('Customer added!');
    }
    navigate('/');
  };

  return (
    <div>
      <h3>{isEditMode ? 'Edit Customer' : 'Add New Customer'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Account Type</label>
          <select name="Acctype" value={formData.Acctype} onChange={handleChange} className="form-control" required >
            <option value="Savings" selected>Savings</option>
            <option value="Current">Current</option>
            <option value="Overdraft">Overdraft</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Balance</label>
          <input type="number" name="balance" value={formData.balance} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success me-2">
          {isEditMode ? 'Update' : 'Submit'}
        </button>
        <Link to="/" className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  );
}

export default CustomerForm;