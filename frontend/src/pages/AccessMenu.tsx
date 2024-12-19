// AccessMenu.tsx
import React, { useState } from 'react';

interface User {
  id: number;
  preferredName: string;
  status: string;
  isSuperAdmin: boolean;
  securityGroup: string;
  email: string;
  language: string;
  region: string;
}

const mockUsers: User[] = [
  {
    id: 1,
    preferredName: 'John Doe',
    status: 'Active',
    isSuperAdmin: true,
    securityGroup: 'Admin Group',
    email: 'johndoe@example.com',
    language: 'English',
    region: 'US',
  },
  {
    id: 2,
    preferredName: 'Jane Smith',
    status: 'Inactive',
    isSuperAdmin: false,
    securityGroup: 'HR Group',
    email: 'janesmith@example.com',
    language: 'French',
    region: 'France',
  },
  {
    id: 3,
    preferredName: 'Alice Johnson',
    status: 'Active',
    isSuperAdmin: false,
    securityGroup: 'IT Group',
    email: 'alicejohnson@example.com',
    language: 'Spanish',
    region: 'Mexico',
  },
  {
    id: 4,
    preferredName: 'Bob Brown',
    status: 'Active',
    isSuperAdmin: false,
    securityGroup: 'Support Group',
    email: 'bobbrown@example.com',
    language: 'German',
    region: 'Germany',
  },
  {
    id: 5,
    preferredName: 'Charlie Davis',
    status: 'Inactive',
    isSuperAdmin: false,
    securityGroup: 'Finance Group',
    email: 'charliedavis@example.com',
    language: 'Italian',
    region: 'Italy',
  },
];

const AccessMenu: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="flex">
      {/* Right Section: User List */}
      <div className="w-1/3 p-4 border-l border-gray-200 bg-gray-50">
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
          {mockUsers.map((user) => (
            <li
              key={user.id}
              className="p-2 border rounded hover:bg-gray-100 cursor-pointer shadow-sm"
              onClick={() => setSelectedUser(user)}
            >
              {user.preferredName}
            </li>
          ))}
        </ul>
      </div>

      {/* Left Section: User Details */}
      <div className="w-2/3 p-4 bg-white">
        {selectedUser ? (
          <div className="border p-4 rounded shadow-lg bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{selectedUser.preferredName}</h2>
            <p className="mb-2"><strong className="text-gray-700">Status:</strong> {selectedUser.status}</p>
            <p className="mb-2"><strong className="text-gray-700">Super Admin:</strong> {selectedUser.isSuperAdmin ? 'Yes' : 'No'}</p>
            <p className="mb-2"><strong className="text-gray-700">Security Group:</strong> {selectedUser.securityGroup}</p>
            <p className="mb-2"><strong className="text-gray-700">Email:</strong> {selectedUser.email}</p>
            <p className="mb-2"><strong className="text-gray-700">Language:</strong> {selectedUser.language}</p>
            <p className="mb-2"><strong className="text-gray-700">Region:</strong> {selectedUser.region}</p>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Select a user to view details.</p>
        )}
      </div>
    </div>
  );
};

export default AccessMenu;
