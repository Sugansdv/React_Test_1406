import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = form;

    if (!name || !email || !password || !confirm) {
      alert("All fields are required");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(u => u.email === email);

    if (exists) {
      alert("User already exists");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="col-md-6 mx-auto p-4 shadow rounded">
        <h3 className="mb-4">Register</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" className="form-control mb-3" placeholder="Full Name" onChange={handleChange} />
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} />
          <div className="mb-3">
            <input
              type={show ? 'text' : 'password'}
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type={show ? 'text' : 'password'}
              name="confirm"
              className="form-control"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="showPassword" onChange={() => setShow(!show)} />
            <label className="form-check-label" htmlFor="showPassword">Show Password</label>
          </div>
          <button className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
