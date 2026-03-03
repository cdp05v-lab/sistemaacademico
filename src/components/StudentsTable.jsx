import React from 'react';

const StudentsTable = ({ students }) => {
  return (
    <table className="w-full border-collapse border mb-6">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Correo</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, i) => (
          <tr key={i}>
            <td className="border p-2">{s.name}</td>
            <td className="border p-2">{s.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
