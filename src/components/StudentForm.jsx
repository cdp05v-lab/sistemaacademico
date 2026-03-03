import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const StudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-white">
      <h3 className="text-xl mb-3">Agregar Estudiante</h3>
      <InputField type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button text="Agregar" onClick={handleSubmit} />
    </form>
  );
};

export default StudentForm;