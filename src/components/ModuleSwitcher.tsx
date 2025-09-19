import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, UserIcon, UsersIcon, BuildingIcon } from 'lucide-react';
export const ModuleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const modules = [{
    name: 'Admin',
    path: '/admin',
    icon: <UsersIcon className="h-4 w-4 mr-2" />
  }, {
    name: 'Client',
    path: '/',
    icon: <BuildingIcon className="h-4 w-4 mr-2" />
  }, {
    name: 'Employee',
    path: '/employee',
    icon: <UserIcon className="h-4 w-4 mr-2" />
  }];
  const getCurrentModule = () => {
    const path = window.location.pathname;
    if (path.startsWith('/admin')) return 'Admin';
    if (path.startsWith('/employee')) return 'Employee';
    return 'Client';
  };
  const handleModuleChange = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };
  return <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
        <span>Module: {getCurrentModule()}</span>
        <ChevronDownIcon className="ml-2 h-4 w-4" />
      </button>
      {isOpen && <div className="absolute mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {modules.map(module => <button key={module.name} onClick={() => handleModuleChange(module.path)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center" role="menuitem">
                {module.icon}
                {module.name}
              </button>)}
          </div>
        </div>}
    </div>;
};