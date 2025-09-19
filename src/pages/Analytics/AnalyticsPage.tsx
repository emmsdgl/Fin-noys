import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
export const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('month');
  // Mock data for charts
  const taskCompletionData = [{
    name: 'Week 1',
    completed: 28,
    inProgress: 4,
    upcoming: 8
  }, {
    name: 'Week 2',
    completed: 22,
    inProgress: 6,
    upcoming: 10
  }, {
    name: 'Week 3',
    completed: 30,
    inProgress: 3,
    upcoming: 5
  }, {
    name: 'Week 4',
    completed: 25,
    inProgress: 8,
    upcoming: 12
  }];
  const teamPerformanceData = [{
    name: 'Team 1',
    performance: 92
  }, {
    name: 'Team 2',
    performance: 87
  }, {
    name: 'Team 3',
    performance: 95
  }, {
    name: 'Team 4',
    performance: 78
  }];
  const serviceTypeData = [{
    name: 'Hotel Cleaning',
    value: 45
  }, {
    name: 'Deep Cleaning',
    value: 25
  }, {
    name: 'Daily Room Cleaning',
    value: 20
  }, {
    name: 'Other Services',
    value: 10
  }];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <p className="text-gray-500">Performance metrics and statistics</p>
      </div>
      <div className="mb-6 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm">
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-l-md ${timeRange === 'week' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`} onClick={() => setTimeRange('week')}>
            Week
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium ${timeRange === 'month' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`} onClick={() => setTimeRange('month')}>
            Month
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-r-md ${timeRange === 'year' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`} onClick={() => setTimeRange('year')}>
            Year
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Tasks</h3>
          <p className="text-3xl font-bold">153</p>
          <div className="mt-2 flex items-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            <span className="text-sm ml-1">8% from last month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Completed Tasks</h3>
          <p className="text-3xl font-bold">105</p>
          <div className="mt-2 flex items-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            <span className="text-sm ml-1">12% from last month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Active Teams</h3>
          <p className="text-3xl font-bold">4</p>
          <div className="mt-2 flex items-center text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm ml-1">New team added</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">
            Avg. Completion Time
          </h3>
          <p className="text-3xl font-bold">1.2h</p>
          <div className="mt-2 flex items-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            <span className="text-sm ml-1">15% faster than target</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Task Completion</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={taskCompletionData} margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" stackId="a" fill="#4F46E5" />
                <Bar dataKey="inProgress" stackId="a" fill="#F59E0B" />
                <Bar dataKey="upcoming" stackId="a" fill="#9CA3AF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Team Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamPerformanceData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="performance" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">
            Service Type Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={serviceTypeData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                name,
                percent
              }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                  {serviceTypeData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[{
            id: 1,
            action: 'Task Completed',
            description: 'Deep Cleaning at Hotel California',
            time: '2 hours ago',
            icon: '✅'
          }, {
            id: 2,
            action: 'New Task',
            description: 'Room Cleaning at Sunset Resort',
            time: '4 hours ago',
            icon: '🆕'
          }, {
            id: 3,
            action: 'Team Assignment',
            description: 'Team 2 assigned to Mountain View Lodge',
            time: '5 hours ago',
            icon: '👥'
          }, {
            id: 4,
            action: 'Task Rescheduled',
            description: 'Window Cleaning at Hotel California',
            time: '1 day ago',
            icon: '🔄'
          }, {
            id: 5,
            action: 'New Client',
            description: 'Oceanview Resort added as client',
            time: '2 days ago',
            icon: '🏢'
          }].map(activity => <div key={activity.id} className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                  {activity.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};