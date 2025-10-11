import React, { useState } from 'react';

const RegistrationForm = () => {
  // Each field has its own state (controlled components)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are required!');
      return;
    }

    setError('');
    console.log('Form submitted successfully:', { username, email, password });
    alert('User registered successfully!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;