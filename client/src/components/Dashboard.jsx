import React from "react";
import {FaExternalLinkAlt} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 flex flex-col space-y-6">
      {/* Logo */}
      <div className="flex items-center justify-center text-xl font-bold">IndiMinds Logo</div>
      
      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700">
          Detail <FaExternalLinkAlt size={12} />
        </a>
        <a href="#" className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700">
          Summary <FaExternalLinkAlt size={12} />
        </a>
        <a href="#" className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700">
          Bar <FaExternalLinkAlt size={12} />
        </a>
        <a href="#" className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700">
         Chart <FaExternalLinkAlt size={12} />
        </a>
      </nav>
    </div>
  );
};

export default Dashboard;
