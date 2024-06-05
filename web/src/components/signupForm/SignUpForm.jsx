import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpForm.css';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    params.append('username', username);

    params.append('password', password);
    params.append('email', email);

    try {
      const response = await axios.post('http://127.0.0.1:5000/signup', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Inscreva-Se</h1>
        <label className='label'>
          Email:
          <input className='input' type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label className='label'>
          Nome:
          <input className='input' type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label className='label'>
          Senha:
          <input className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button className='button' type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default SignUpForm;