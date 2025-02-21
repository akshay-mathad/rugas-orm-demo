import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signin', credentials); // Adjust the API endpoint as needed
            alert('Sign In successful!');
            // Handle successful sign in (e.g., store token, redirect, etc.)
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn; 