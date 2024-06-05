import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      alert(response.data.message);
      navigate('/form');
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Login</h1>
        <label className='label'>
          Usuário:
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

export default LoginForm;
