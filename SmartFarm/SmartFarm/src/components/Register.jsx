import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import yields from '../../src/assets/yields.png';
import Register from '../components/Register';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/login', { email, password });
      toast('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      toast('Failed to login. Please check your credentials.');
    }
  };

  return (
    <>
      <p className="font-bold text-green-700 pt-2 text-[48px] text-center">SmartFarm</p>
      <div className="flex items-center justify-center gap-32 mt-8">
        <div className="gap-64">
          <img src={yields} className="h-[500px] w-[600px] -ml-12" alt="farmer who has harvested largely" />
        </div>

        <div className="w-full max-w-xs">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <button onClick={handleLogin} className="bg-green-700 text-white px-4 py-2 w-full">
            Register
          </button>
          <div className="mt-4">
            <a href="/register" className="text-green-700">
              Register
            </a>{' '}
            |{' '}
            <a href="http://localhost:5173/" className="text-green-500">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
