import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, BellIcon, CheckSquareIcon, BarChartIcon, UsersIcon, UserIcon, LogOutIcon } from 'lucide-react';
export const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  return <div className="w-60 min-h-screen bg-white border-r flex flex-col">
      <div className="p-6">
        <Link to="/" className="block">
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
            <Link to="/" className={`flex items-center px-6 py-3 ${isActive('/') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <LayoutDashboardIcon className={`h-5 w-5 mr-3 ${isActive('/') ? 'text-white' : 'text-blue-500'}`} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className={`flex items-center px-6 py-3 ${isActive('/orders') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <BellIcon className={`h-5 w-5 mr-3 ${isActive('/orders') ? 'text-white' : 'text-blue-500'}`} />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/tasks" className={`flex items-center px-6 py-3 ${isActive('/tasks') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <CheckSquareIcon className={`h-5 w-5 mr-3 ${isActive('/tasks') ? 'text-white' : 'text-blue-500'}`} />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className={`flex items-center px-6 py-3 ${isActive('/analytics') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <BarChartIcon className={`h-5 w-5 mr-3 ${isActive('/analytics') ? 'text-white' : 'text-blue-500'}`} />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/teams" className={`flex items-center px-6 py-3 ${isActive('/teams') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <UsersIcon className={`h-5 w-5 mr-3 ${isActive('/teams') ? 'text-white' : 'text-blue-500'}`} />
              <span>Teams</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts" className={`flex items-center px-6 py-3 ${isActive('/accounts') ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100'}`}>
              <UserIcon className={`h-5 w-5 mr-3 ${isActive('/accounts') ? 'text-white' : 'text-blue-500'}`} />
              <span>Accounts</span>
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