import React from 'react';

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default DashboardCard;