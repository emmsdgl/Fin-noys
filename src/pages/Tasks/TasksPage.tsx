import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from 'lucide-react';
import { StatusBadge } from '../../components/ui/StatusBadge';
export const TasksPage = () => {
  const [viewMode, setViewMode] = useState('month');
  const [currentMonth, setCurrentMonth] = useState('July 2025');
  // Calendar data
  const days = Array.from({
    length: 31
  }, (_, i) => i + 1);
  const daysOfWeek = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
  // Task data
  const tasks = [{
    id: 1,
    client: 'Client 1',
    name: 'Deep Cleaning',
    date: 'July 9, 2025',
    team: 'Team 1',
    startTime: '2:00 am',
    priority: 'Urgent',
    status: 'Completed'
  }, {
    id: 2,
    client: 'Client 1',
    name: 'Snow Out Cleaning',
    date: 'July 15, 2025',
    team: 'Team 1',
    startTime: '3:00 am',
    priority: 'Normal',
    status: 'In Progress'
  }, {
    id: 3,
    client: 'Client 2',
    name: 'Full Daily Cleaning',
    date: 'July 15, 2025',
    team: 'Team 1',
    startTime: '3:00 am',
    priority: 'Normal',
    status: 'In Progress'
  }, {
    id: 4,
    client: 'Client 1',
    name: 'Daily Room Cleaning',
    date: 'July 7, 2025',
    team: 'Team 1',
    startTime: '2:00 am',
    priority: 'Normal',
    status: 'In Progress'
  }];
  const todoTasks = tasks.filter(t => t.status === 'Upcoming');
  const inProgressTasks = tasks.filter(t => t.status === 'In Progress');
  const completedTasks = tasks.filter(t => t.status === 'Completed');
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <p className="text-gray-500">Monitor, Add, and Manage Tasks</p>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-medium">{currentMonth}</h2>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-50 rounded-md overflow-hidden">
            <button className="px-4 py-2 text-sm">Show:</button>
            <button className="px-4 py-2 text-sm bg-blue-500 text-white">
              Month
            </button>
          </div>
          <button className="p-1 rounded-md border">
            <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
          </button>
          <button className="p-1 rounded-md border">
            <ChevronRightIcon className="h-5 w-5 text-blue-500" />
          </button>
          <Link to="/tasks/add" className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm flex items-center">
            <PlusIcon className="h-4 w-4 mr-1" />
            New Task
          </Link>
        </div>
      </div>
      <div className="bg-white border rounded-lg overflow-hidden mb-8">
        <div className="grid grid-cols-7">
          {daysOfWeek.map((day, index) => <div key={index} className="p-4 border-r border-b text-center">
              <h3 className="font-medium text-blue-500">{day}</h3>
            </div>)}
          {days.map(day => {
          const dayTasks = tasks.filter(t => t.date === `July ${day}, 2025`);
          return <div key={day} className="p-2 border-r border-b min-h-32 relative">
                <span className="text-sm">{day}</span>
                {dayTasks.map(task => <div key={task.id} className={`mt-1 p-2 rounded text-xs ${task.priority === 'Urgent' ? 'bg-red-100' : task.status === 'Completed' ? 'bg-green-100' : task.status === 'In Progress' ? 'bg-orange-100' : 'bg-blue-100'}`}>
                    <p className="font-medium">{task.name}</p>
                    <p>Assigned to: Team 1</p>
                  </div>)}
              </div>;
        })}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">To Do</h3>
          {todoTasks.length > 0 ? todoTasks.map(task => <div key={task.id} className="bg-white p-4 rounded-lg border mb-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      {task.priority}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      Client {task.client}
                    </p>
                  </div>
                  <button className="text-gray-500 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <h4 className="font-medium">{task.name}</h4>
                <div className="mt-4 flex justify-between text-xs">
                  <div>
                    <p className="text-gray-500">Team {task.team}</p>
                    <div className="flex mt-1">
                      <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-400 -ml-1"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-500 -ml-1"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Start Time</p>
                    <p>{task.startTime}</p>
                  </div>
                </div>
              </div>) : <div className="bg-white p-4 rounded-lg border text-center text-gray-500">
              No tasks to do
            </div>}
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">In Progress</h3>
          {inProgressTasks.map(task => <div key={task.id} className="bg-white p-4 rounded-lg border mb-4">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {task.priority}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    Client {task.client}
                  </p>
                </div>
                <button className="text-gray-500 hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
              <h4 className="font-medium">{task.name}</h4>
              <div className="mt-4 flex justify-between text-xs">
                <div>
                  <p className="text-gray-500">Team {task.team}</p>
                  <div className="flex mt-1">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-400 -ml-1"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-500 -ml-1"></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">Start Time</p>
                  <p>{task.startTime}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Completed</h3>
          {completedTasks.map(task => <div key={task.id} className="bg-white p-4 rounded-lg border mb-4">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    {task.priority}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    Client {task.client}
                  </p>
                </div>
                <button className="text-gray-500 hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
              <h4 className="font-medium">{task.name}</h4>
              <div className="mt-4 flex justify-between text-xs">
                <div>
                  <p className="text-gray-500">Team {task.team}</p>
                  <div className="flex mt-1">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-400 -ml-1"></div>
                    <div className="h-6 w-6 rounded-full bg-gray-500 -ml-1"></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">Start Time</p>
                  <p>{task.startTime}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Unassigned Tasks</h3>
        <div className="bg-white rounded-lg overflow-hidden border">
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
              {[{
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
            }].map(task => <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {task.taskName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={task.duration.includes('Estimated') ? 'text-orange-500' : ''}>
                      {task.duration}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.serviceType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <span>{task.assignedTo}</span>
                      <div className="ml-2 flex -space-x-1">
                        <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white"></div>
                        <div className="h-6 w-6 rounded-full bg-gray-400 border-2 border-white"></div>
                        <div className="h-6 w-6 rounded-full bg-gray-500 border-2 border-white"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={task.status} />
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
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
            Assign All
          </button>
        </div>
      </div>
    </div>;
};