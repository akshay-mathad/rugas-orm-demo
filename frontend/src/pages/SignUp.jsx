import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/signup', user); // Adjust the API endpoint as needed
            alert('Sign Up successful!');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp; 