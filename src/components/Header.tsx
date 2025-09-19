import React from 'react';
export const Header = () => {
  return <header className="bg-blue-500 text-white p-6 rounded-lg flex items-center">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Hello, Emmaus</h1>
        <p className="text-sm mt-1">
          Track tasks and manage them in the dashboard
        </p>
      </div>
      <div className="ml-auto">
        <img src="/figma-preview.jpg" alt="Dashboard illustration" className="h-32 w-auto" />
      </div>
    </header>;
};