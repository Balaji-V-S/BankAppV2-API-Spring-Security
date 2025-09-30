import { Link } from 'react-router-dom';

function HomePage({ list, handleDelete }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  return (
    <div>
  <h1 className="mb-3">Customer List</h1>
  <Link to="/add" className="btn btn-primary mb-3">
    Add New Customer
  </Link>
  <div className="table-responsive">
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Account Type</th>
          <th>Balance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.Acctype}</td>
            <td>{formatCurrency(customer.balance)}</td>
            <td>
              <Link to={`/customer/${customer.id}`} className="btn btn-info btn-sm me-2">
                View
              </Link>
              <Link to={`/edit/${customer.id}`} className="btn btn-warning btn-sm me-2">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(customer.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default HomePage;