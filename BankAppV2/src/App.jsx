// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import customersData from './AccData.json';
import Header from './components/header';
import HomePage from './pages/homePage';
import CustomerForm from './components/AddCustomer';
import CustomerDetails from './components/showData';
import Test from "./pages/TestPage";
import TestAxios from "./pages/TestPageAxios";
import NotFound from './pages/NotFound';

function App() {
  const [customerList, setCustomerList] = useState(customersData);

  // CREATE: Add a new customer
  const handleAddCustomer = (newCustomer) => {
    const customerWithId = { ...newCustomer, id: Date.now() }; // Assign a unique ID
    setCustomerList(prevList => [...prevList, customerWithId]);
  };

  const handleUpdateCustomer = (updatedCustomer) => {
    setCustomerList(prevList =>
      prevList.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c))
    );
  };

  const handleDeleteCustomer = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomerList(prevList => prevList.filter(c => c.id !== customerId));
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage list={customerList} handleDelete={handleDeleteCustomer} />}/>
          <Route path="/add" element={<CustomerForm handleAdd={handleAddCustomer} />} />
          <Route path="/edit/:id" element={<CustomerForm list={customerList} handleUpdate={handleUpdateCustomer} />}/>
          <Route path="/customer/:id" element={<CustomerDetails list={customerList} />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/test" element={<Test/>}/>
                    <Route path="/testaxios" element={<TestAxios/>}/>

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;