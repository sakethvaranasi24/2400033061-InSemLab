import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${form.username}\nPassword: ${form.password}`);
  };

  return (
    <div className="App">
      <h1>Student Portal Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
