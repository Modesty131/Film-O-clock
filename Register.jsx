import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = use.useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/register', { name, email, password });
    login(res.data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="border block w-full p-2 mb-2"/>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="border block w-full p-2 mb-2"/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="border block w-full p-2 mb-2"/>
      <button className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
}
