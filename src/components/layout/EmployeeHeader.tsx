import React from 'react';
import { BellIcon, MessageSquareIcon, UserIcon } from 'lucide-react';
import { ModuleSwitcher } from '../ModuleSwitcher';
export const EmployeeHeader = () => {
  return <header className="bg-white border-b p-4 flex items-center justify-end">
      <div className="mr-auto">
        <ModuleSwitcher />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MessageSquareIcon className="h-5 w-5 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <span className="font-medium">Adam</span>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>;
};