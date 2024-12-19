// NavigationMenu.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false);

  const toggleTeamsDropdown = () => {
    setIsTeamsDropdownOpen(!isTeamsDropdownOpen);
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">Payroll App</h2>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
          <li><Link to="/employees" className="hover:text-blue-400">Employees</Link></li>
          <li><Link to="/reports" className="hover:text-blue-400">Reports</Link></li>
          <li>
            <div className="cursor-pointer hover:text-blue-400" onClick={toggleTeamsDropdown}>
              Teams
            </div>
            {isTeamsDropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link to="/teams/pistons" className="hover:text-blue-300">Pistons</Link></li>
                <li><Link to="/teams/lamborghinis" className="hover:text-blue-300">Lamborghinis</Link></li>
                <li><Link to="/teams/submarines" className="hover:text-blue-300">Submarines</Link></li>
                <li><Link to="/teams/mozies" className="hover:text-blue-300">MoZies</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/access" className="hover:text-blue-400">Access & Options</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
