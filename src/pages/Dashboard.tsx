import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { ClockIcon } from 'lucide-react';
export const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 6, 7)); // July 7, 2025
  const attendanceData = [{
    name: 'Present',
    value: 60,
    color: '#2fbc00'
  }, {
    name: 'Absent',
    value: 20,
    color: '#ff1823'
  }, {
    name: 'Late',
    value: 20,
    color: '#ff7f00'
  }];
  const onTimeArrivals = [{
    name: 'Emmaus',
    id: '1234566',
    time: '1 hr 20 m'
  }, {
    name: 'Adam',
    id: '3483947',
    time: '1 hr 30 m'
  }, {
    name: 'Reigne',
    id: '8490584',
    time: '1 hr 0 m'
  }];
  const lateArrivals = [{
    name: 'Nicole',
    id: '6856954',
    time: '10m'
  }, {
    name: 'Dela',
    id: '7567567',
    time: '30m'
  }];
  const missing = [{
    name: 'Leira',
    id: '7674345',
    status: 'Checked Out'
  }, {
    name: 'Juan',
    id: '4345456',
    status: 'Check In'
  }];
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
  return <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <header className="bg-blue-500 text-white p-6 rounded-lg flex items-center mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Hello, Emmaus</h1>
            <p className="text-sm mt-1">
              Track tasks and manage them in the dashboard
            </p>
          </div>
          <div className="ml-auto">
            <img src="/figma-preview.jpg" alt="Dashboard illustration" className="h-32 w-auto" />
          </div>
        </header>
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">
            Recent Orders{' '}
            <span className="text-xs bg-gray-100 px-1 rounded">(3)</span>
          </h2>
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
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4">
            Assigned Teams{' '}
            <span className="text-xs bg-gray-100 px-1 rounded">(3)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(team => <div key={team} className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="flex space-x-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                    Complete
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    Assigned
                  </span>
                </div>
                <h3 className="font-medium">Team {team}</h3>
                <p className="text-sm text-gray-500">Emmaus, Adam, Leira</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="text-gray-500">From</p>
                    <p>June 1</p>
                  </div>
                  <div>
                    <p className="text-gray-500">To</p>
                    <p>June 30</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Days</p>
                    <p>M, T, TH</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full" style={{
                  width: '30%'
                }}></div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-72 mt-6 lg:mt-0 lg:ml-6 p-6 border rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Attendance</h2>
          <div className="flex items-center text-sm">
            <span>7 July 2025</span>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <PieChart width={200} height={200}>
            <Pie data={attendanceData} cx={100} cy={100} innerRadius={60} outerRadius={80} dataKey="value">
              {attendanceData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </div>
        <div className="mt-6 space-y-1">
          <div className="flex items-center text-sm">
            <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
            <span>Expected (13)</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
            <span>Present (6)</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
            <span>Absent (7)</span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-medium mb-4">On Time Arrivals</h3>
          {onTimeArrivals.map((person, index) => <div key={index} className="flex items-center justify-between mb-3">
              <div>
                <p className="font-medium">{person.name}</p>
                <p className="text-xs text-gray-500">{person.id}</p>
              </div>
              <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full flex items-center">
                <ClockIcon className="h-3 w-3 mr-1" />
                {person.time}
              </div>
            </div>)}
        </div>
        <div className="mt-8">
          <h3 className="font-medium mb-4">Late Arrivals</h3>
          {lateArrivals.map((person, index) => <div key={index} className="flex items-center justify-between mb-3">
              <div>
                <p className="font-medium">{person.name}</p>
                <p className="text-xs text-gray-500">{person.id}</p>
              </div>
              <div className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full flex items-center">
                <ClockIcon className="h-3 w-3 mr-1" />
                {person.time}
              </div>
            </div>)}
        </div>
        <div className="mt-8">
          <h3 className="font-medium mb-4">Missing</h3>
          {missing.map((person, index) => <div key={index} className="flex items-center justify-between mb-3">
              <div>
                <p className="font-medium">{person.name}</p>
                <p className="text-xs text-gray-500">{person.id}</p>
              </div>
              <div className={`text-xs px-3 py-1 rounded-full ${person.status === 'Checked Out' ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}>
                {person.status}
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};