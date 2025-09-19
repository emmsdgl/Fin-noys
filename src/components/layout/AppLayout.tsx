import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
export const AppLayout = () => {
  return <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
      <div className="fixed bottom-8 right-8">
        <button className="h-14 w-14 rounded-full bg-navy-700 text-white flex items-center justify-center shadow-lg">
          <span className="text-2xl">?</span>
        </button>
      </div>
    </div>;
};