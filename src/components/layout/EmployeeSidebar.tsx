import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, ClipboardListIcon, ClockIcon, BarChartIcon, LogOutIcon } from 'lucide-react';
export const EmployeeSidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  return <div className="w-60 min-h-screen bg-white border-r flex flex-col">
      <div className="p-6">
        <Link to="/employee" className="block">
          <div className="flex items-center">
            <img src="/HF_Team_Management_Admin_Teams_Page-_P1.png" alt="FIN-NOYS Logo" className="h-8 w-auto" />
            <h1 className="font-bold text-xl ml-2">FIN-NOYS</h1>
          </div>
          <p className="text-xs text-gray-500">CLEANING SERVICES</p>
        </Link>
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          <li>
            <Link to="/employee" className={`flex items-center px-6 py-3 ${isActive('/employee') && !isActive('/employee/tasks') && !isActive('/employee/attendance') && !isActive('/employee/performance') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <LayoutDashboardIcon className={`h-5 w-5 mr-3 ${isActive('/employee') && !isActive('/employee/tasks') && !isActive('/employee/attendance') && !isActive('/employee/performance') ? 'text-white' : 'text-blue-500'}`} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/employee/tasks" className={`flex items-center px-6 py-3 ${isActive('/employee/tasks') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <ClipboardListIcon className={`h-5 w-5 mr-3 ${isActive('/employee/tasks') ? 'text-white' : 'text-blue-500'}`} />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link to="/employee/attendance" className={`flex items-center px-6 py-3 ${isActive('/employee/attendance') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <ClockIcon className={`h-5 w-5 mr-3 ${isActive('/employee/attendance') ? 'text-white' : 'text-blue-500'}`} />
              <span>Attendance</span>
            </Link>
          </li>
          <li>
            <Link to="/employee/performance" className={`flex items-center px-6 py-3 ${isActive('/employee/performance') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <BarChartIcon className={`h-5 w-5 mr-3 ${isActive('/employee/performance') ? 'text-white' : 'text-blue-500'}`} />
              <span>Performance</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6">
        <button className="flex items-center text-gray-800 hover:text-blue-500">
          <LogOutIcon className="h-5 w-5 mr-3 text-blue-500" />
          <span>Logout</span>
        </button>
      </div>
    </div>;
};