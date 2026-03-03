import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl mb-4" style={{ color: "#2563eb" }}>
  Iniciar Sesión
      </h2>
      <InputField type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text="Ingresar" onClick={handleSubmit} />
    </form>
  );
};

export default LoginForm;