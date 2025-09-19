import React, { useState } from 'react';
import { PlusIcon, CalendarIcon } from 'lucide-react';
import { StatusBadge } from '../../components/ui/StatusBadge';
export const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const orders = [{
    id: 1,
    taskName: 'Toilet Cleaning',
    date: 'Jul 7, 2025',
    duration: '1hr 30 mins',
    serviceType: 'Hotel Cleaning',
    assignedTo: 'Team 1',
    status: 'Completed' as const
  }, {
    id: 2,
    taskName: 'Cloth Laundry',
    date: 'Jul 7, 2025',
    duration: 'Estimated: 30 mins',
    serviceType: 'Hotel Cleaning',
    assignedTo: 'Team 1',
    status: 'In Progress' as const
  }, {
    id: 3,
    taskName: 'Window Cleaning',
    date: 'Jul 7, 2025',
    duration: 'Estimated: 50 mins',
    serviceType: 'Hotel Cleaning',
    assignedTo: 'Team 1',
    status: 'Upcoming' as const
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Orders Management</h1>
        <p className="text-gray-500">Don't forget to complete your tasks</p>
      </div>
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex border-b">
          <button className={`px-6 py-3 text-sm font-medium ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`} onClick={() => setActiveTab('all')}>
            All Orders (4)
          </button>
          <button className={`px-6 py-3 text-sm font-medium ${activeTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`} onClick={() => setActiveTab('upcoming')}>
            Upcoming (4)
          </button>
          <button className={`px-6 py-3 text-sm font-medium ${activeTab === 'progress' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`} onClick={() => setActiveTab('progress')}>
            In Progress (4)
          </button>
          <button className={`px-6 py-3 text-sm font-medium ${activeTab === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`} onClick={() => setActiveTab('completed')}>
            Completed (4)
          </button>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div></div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-md px-4 py-2 bg-white">
              <span className="text-sm text-gray-500 mr-2">Filter:</span>
              <span className="text-sm">Select a Date</span>
              <CalendarIcon className="h-4 w-4 ml-2 text-gray-500" />
            </div>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm flex items-center">
              <PlusIcon className="h-4 w-4 mr-1" />
              New Task
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Task Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Service Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.taskName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={order.duration.includes('Estimated') ? 'text-orange-500' : ''}>
                      {order.duration}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.serviceType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <span>{order.assignedTo}</span>
                      <div className="ml-2 flex -space-x-1">
                        <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white"></div>
                        <div className="h-6 w-6 rounded-full bg-gray-400 border-2 border-white"></div>
                        <div className="h-6 w-6 rounded-full bg-gray-500 border-2 border-white"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};