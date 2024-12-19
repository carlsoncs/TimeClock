import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Employees from './pages/Employees';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Teams from './pages/Teams';
import AccessMenu from './pages/AccessMenu';
import NavigationMenu from './components/NavigationMenu';
import TeamView from './pages/Teams';



const App = () => {
  return (  
    <Router>
      <div className="flex">
        <NavigationMenu />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamName" element={<TeamView />} />
            <Route path="/access" element={<AccessMenu />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;