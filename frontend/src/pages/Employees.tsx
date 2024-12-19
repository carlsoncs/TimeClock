import React, { useState, useEffect } from 'react';

interface Employee {
  id: number;
  name: string;
  badgeNumber: string;
  department: string;
  payRate: string;
  hireDate: string;
  phoneNumber: string;
  address: string;
  team: string;
  location: string;
}

const Employees: React.FC = () => {
  const mockEmployees: Employee[] = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Employee ${index + 1}`,
    department: `Department ${index % 5 + 1}`,
    badgeNumber: `BADGE-${index + 1}`,
    payRate: `$${(15 + (index % 5)).toFixed(2)}/hr`,
    hireDate: `202${index % 3 + 1}-01-${(index % 28 + 1).toString().padStart(2, '0')}`,
    phoneNumber: `555-1234-${(index + 100).toString().slice(-4)}`,
    address: `${index + 1} Mockingbird Lane`,
    team: `Team ${index % 3 + 1}`,
    location: `Location ${index % 4 + 1}`,
  }));

  const [visibleEmployees, setVisibleEmployees] = useState<Employee[]>(mockEmployees.slice(0, 20));
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const loadMore = () => {
    setVisibleEmployees((prev) => [
      ...prev,
      ...mockEmployees.slice(prev.length, prev.length + 20),
    ]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-1/3 p-4 border-r border-gray-200 bg-gray-50">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 border border-gray-300 rounded mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow">
            Filter
          </button>
        </div>
        <ul className="space-y-2 max-h-screen overflow-y-auto">
          {visibleEmployees.map((employee) => (
            <li
              key={employee.id}
              className="p-2 border rounded hover:bg-gray-100 cursor-pointer shadow-sm"
              onClick={() => setSelectedEmployee(employee)}
            >
              {employee.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-2/3 p-4 bg-white">
        {selectedEmployee ? (
          <div className="border p-4 rounded shadow-lg bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{selectedEmployee.name}</h2>
            <p className="mb-2"><strong className="text-gray-700">Badge Number:</strong> {selectedEmployee.badgeNumber}</p>
            <p className="mb-2"><strong className="text-gray-700">Department:</strong> {selectedEmployee.department}</p>
            <p className="mb-2"><strong className="text-gray-700">Pay Rate:</strong> {selectedEmployee.payRate}</p>
            <p className="mb-2"><strong className="text-gray-700">Hire Date:</strong> {selectedEmployee.hireDate}</p>
            <p className="mb-2"><strong className="text-gray-700">Phone Number:</strong> {selectedEmployee.phoneNumber}</p>
            <p className="mb-2"><strong className="text-gray-700">Address:</strong> {selectedEmployee.address}</p>
            <p className="mb-2"><strong className="text-gray-700">Team:</strong> {selectedEmployee.team}</p>
            <p className="mb-2"><strong className="text-gray-700">Location:</strong> {selectedEmployee.location}</p>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Select an employee to view details.</p>
        )}
      </div>
    </div>
  );
};

export default Employees;
