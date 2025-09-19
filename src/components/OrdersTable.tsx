import React, { useState } from 'react';
import { ChevronDownIcon, PlusIcon } from 'lucide-react';
export const OrdersTable = () => {
  const [filterDay, setFilterDay] = useState('This day');
  const [sortBy, setSortBy] = useState('Service Type');
  const orders = [{
    id: 1,
    client: 'Solaire Hotel',
    date: 'Jul 7, 2025',
    serviceType: 'Hotel Cleaning',
    assignedTo: 'Team 1',
    status: 'Complete'
  }, {
    id: 2,
    client: "Nono's BNB",
    date: 'Jul 7, 2025',
    serviceType: 'Hotel Cleaning',
    assignedTo: 'Team 1',
    status: 'Ongoing'
  }, {
    id: 3,
    client: "Adam's Beachhouse",
    date: 'Jul 7, 2025',
    serviceType: 'Hotel Cleaning',
    assignedTo: 'Team 1',
    status: 'Incomplete'
  }];
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-orange-100 text-orange-800';
      case 'Incomplete':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">
          Recent Orders{' '}
          <span className="text-xs bg-gray-100 px-1 rounded">(3)</span>
        </h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="flex items-center bg-blue-50 rounded-md px-4 py-2 text-sm">
              <span>Show:</span>
              <span className="ml-2">{filterDay}</span>
              <ChevronDownIcon className="h-4 w-4 ml-2" />
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center bg-blue-50 rounded-md px-4 py-2 text-sm">
              <span>Sort By:</span>
              <span className="ml-2">{sortBy}</span>
              <ChevronDownIcon className="h-4 w-4 ml-2" />
            </div>
          </div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm flex items-center">
            <PlusIcon className="h-4 w-4 mr-1" />
            New Task
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned To
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
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
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};