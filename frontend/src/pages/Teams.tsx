// TeamView.tsx
import React, { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';

const TeamView = () => {
  const { teamName } = useParams();

  const mockEmployees = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Employee ${index + 1}`,
    status: index % 2 === 0 ? 'Active' : 'Inactive',
    lastClocked: `2023-12-${index % 30 + 1}`,
  }));

  const [selectedPayPeriod, setSelectedPayPeriod] = useState('November 1 - November 15');
  const [filteredEmployees, setFilteredEmployees] = useState(mockEmployees);

  const payPeriods = [
    'November 1 - November 15',
    'November 16 - November 30',
    'December 1 - December 15',
  ];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setFilteredEmployees(
      mockEmployees.filter((employee) =>
        employee.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{teamName} Team</h1>

      <div className="flex items-center mb-4">
        <label htmlFor="pay-period" className="mr-4 font-bold">
          Pay Period:
        </label>
        <select
          id="pay-period"
          value={selectedPayPeriod}
          onChange={(e) => setSelectedPayPeriod(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {payPeriods.map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          className="flex-grow p-2 border rounded mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow">
          Filter
        </button>
      </div>

      <ul className="space-y-2">
        {filteredEmployees.map((employee) => (
          <li key={employee.id} className="p-2 border rounded hover:bg-gray-100 shadow-sm">
            <p className="font-bold">{employee.name}</p>
            <p>Status: {employee.status}</p>
            <p>Last Clocked: {employee.lastClocked}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamView;
