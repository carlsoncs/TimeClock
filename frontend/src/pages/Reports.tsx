import React, { useState } from 'react';

const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const reportTypes = ['Report 1', 'Report 2', 'Report 3']; // Example report types

  return (
    <div className="flex">
      {/* Left Section: Report List */}
      <div className="w-1/3 p-4 bg-gray-100">
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
        <ul className="space-y-2">
          {reportTypes.map((report, index) => (
            <li
              key={index}
              className="p-2 border rounded hover:bg-gray-100 cursor-pointer shadow-sm"
              onClick={() => setSelectedReport(report)}
            >
              {report}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Report Details */}
      <div className="w-2/3 p-4 bg-white">
        {selectedReport ? (
          <div className="border p-4 rounded shadow-lg bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{selectedReport}</h2>
            <p className="text-gray-700">This is a placeholder for the {selectedReport} report. Detailed information or options for running the report will go here.</p>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Select a report to view details.</p>
        )}
      </div>
    </div>
  );
};

export default Reports;
