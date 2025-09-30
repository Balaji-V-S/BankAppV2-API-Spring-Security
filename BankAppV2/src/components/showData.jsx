import { useParams, Link } from 'react-router-dom';

function CustomerDetails({ list }) {
  const { id } = useParams();
  const customer = list.find(c => c.id == id);

  if (!customer) {
    return <h4>Customer not found!</h4>;
  }

  // Function to format the balance as currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  return (
    <div>
      <h3>Customer Details</h3>
      <p><strong>ID:</strong> {customer.id}</p>
      <p><strong>First Name:</strong> {customer.firstName}</p>
      <p><strong>Last Name:</strong> {customer.lastName}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Account Type:</strong> {customer.Acctype}</p>
      <p><strong>Balance:</strong> {formatCurrency(customer.balance)}</p>
      <Link to="/" className="btn btn-primary">Back to List</Link>
    </div>
  );
}

export default CustomerDetails;