import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token
        const response = await axios.get('http://localhost:3000/employees', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployees(response.data); // Set employees
      } catch (err) {
        console.error('Failed to fetch employees:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee: any) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
