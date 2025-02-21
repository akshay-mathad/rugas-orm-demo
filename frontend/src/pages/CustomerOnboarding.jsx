import React, { useState } from 'react';
import axios from 'axios';

const CustomerOnboarding = () => {
    const [customer, setCustomer] = useState({
        name: '',
        address: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/customers', customer);
            alert('Customer onboarded successfully!');
        } catch (error) {
            console.error('Error onboarding customer:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Onboard Customer</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerOnboarding;