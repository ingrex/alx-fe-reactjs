import { error } from "console";
import React, { useState } from 'react';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });


    const [error, setError] = useState('');

    // Handle change in input fields 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // >Handle form submission

    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    // Basic validation 

    if (!formData.username || !formData.email || !formData.password) {
        setError('All field are required');
        return;
    }

    setError('');
    console.log('Form submitted ssuccefully:', formData);
    alert('User registred sucessfully:');



return (
    <div>
        <h2>Controllled Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label><br />
                <input type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                 />
            </div>
            <br />
            <label>Email:</label><br />
            <input type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email" 
            />
            <br />
            <div>
                <label>Password:</label><br />
                <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                />
            </div>
            <br />
            {error && <p style={{ color: 'red'}}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    </div>
);
};

export default RegistrationForm;