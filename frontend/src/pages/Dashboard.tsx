// Dashboard.tsx
import React, { useState } from 'react';

const Dashboard = () => {
  const mockData = [
    { id: 1, name: 'John Doe', status: 'Working', time: '08:45 AM' },
    { id: 2, name: 'Jane Smith', status: 'Out', time: '07:15 AM' },
    { id: 3, name: 'Alice Johnson', status: 'Working', time: '09:00 AM' },
    { id: 4, name: 'Bob Brown', status: 'Working', time: '08:30 AM' },
    { id: 5, name: 'Charlie Davis', status: 'Out', time: '06:50 AM' },
    { id: 6, name: 'Diana Evans', status: 'Working', time: '09:10 AM' },
    { id: 7, name: 'Eve Foster', status: 'Out', time: '05:40 AM' },
    { id: 8, name: 'Frank Green', status: 'Working', time: '08:50 AM' },
    { id: 9, name: 'Grace Harris', status: 'Out', time: '06:15 AM' },
    { id: 10, name: 'Hank Irving', status: 'Working', time: '07:45 AM' },
    { id: 11, name: 'Ian Jackson', status: 'Out', time: '04:50 AM' },
    { id: 12, name: 'Julia King', status: 'Working', time: '08:25 AM' },
    { id: 13, name: 'Kyle Long', status: 'Working', time: '08:40 AM' },
    { id: 14, name: 'Laura Moore', status: 'Working', time: '09:05 AM' },
    { id: 15, name: 'Michael Novak', status: 'Out', time: '05:30 AM' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  interface Employee {
    id: number;
    name: string;
    status: string;
    time: string;
  }

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const currentData = mockData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow p-2 border rounded mr-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Filter
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left text-sm uppercase text-gray-600">
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Time</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((employee) => (
            <tr key={employee.id} className="bg-white hover:bg-gray-50">
              <td className="py-3 px-6">{employee.name}</td>
              <td className="py-3 px-6">{employee.status}</td>
              <td className="py-3 px-6">{employee.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-700 font-bold">
          Total on clock today: {mockData.filter(employee => employee.status === 'Working').length}
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
