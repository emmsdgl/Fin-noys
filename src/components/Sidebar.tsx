import React from 'react';
import { LayoutDashboardIcon, ShoppingBagIcon, CheckSquareIcon, BarChartIcon, UsersIcon, UserIcon, LogOutIcon } from 'lucide-react';
export const Sidebar = () => {
  return <div className="w-60 min-h-screen bg-white border-r flex flex-col">
      <div className="p-6">
        <div className="flex items-center">
          <h1 className="font-bold text-xl">FIN-NOYS</h1>
        </div>
        <p className="text-xs text-gray-500">CLEANING SERVICES</p>
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          <li>
            <a href="#" className="flex items-center px-6 py-3 bg-blue-500 text-white">
              <LayoutDashboardIcon className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-100">
              <ShoppingBagIcon className="h-5 w-5 mr-3 text-blue-500" />
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-100">
              <CheckSquareIcon className="h-5 w-5 mr-3 text-blue-500" />
              <span>Tasks</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-100">
              <BarChartIcon className="h-5 w-5 mr-3 text-blue-500" />
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-100">
              <UsersIcon className="h-5 w-5 mr-3 text-blue-500" />
              <span>Teams</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-100">
              <UserIcon className="h-5 w-5 mr-3 text-blue-500" />
              <span>Accounts</span>
            </a>
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