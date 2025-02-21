import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomerOnboarding from './pages/CustomerOnboarding';
import OrderList from './pages/OrderList';
import ProductList from './pages/ProductList';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/customers" element={<CustomerOnboarding />} />
                <Route path="/orders" element={<OrderList />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<h1>Welcome to the Order Management System</h1>} />
            </Routes>
        </Router>
    );
};

export default App;