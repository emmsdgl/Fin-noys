import React, { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
export const EmployeeTasksPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  // Mock data
  const tasks = [{
    id: 1,
    hotel: 'Kaks Stay Hotel',
    status: 'Complete',
    serviceType: 'Deep Cleaning',
    estimatedDuration: '1 hr 30 mins',
    date: 'July 9, 2025',
    time: '2:00 pm',
    team: 'Team 1'
  }, {
    id: 2,
    hotel: 'Kaks Stay Hotel',
    status: 'Ongoing',
    serviceType: 'Deep Cleaning',
    estimatedDuration: '1 hr 30 mins',
    date: 'July 9, 2025',
    time: '2:00 pm',
    team: 'Team 1'
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Tasks</h1>
        <p className="text-gray-500">Don't forget to complete your tasks</p>
      </div>
      <div className="bg-white rounded-lg mb-6">
        <div className="flex border-b">
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'all' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('all')}>
            All Tasks (4)
          </button>
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'todo' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('todo')}>
            To Do (4)
          </button>
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'progress' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('progress')}>
            In Progress (4)
          </button>
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'completed' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('completed')}>
            Completed (4)
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">July 2025</h2>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="p-2 bg-gray-200 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-8 text-center">
        <div className="text-sm font-medium">Sat</div>
        <div className="text-sm font-medium">Sun</div>
        <div className="text-sm font-medium">Mon</div>
        <div className="text-sm font-medium">Tues</div>
        <div className="text-sm font-medium">Wed</div>
        <div className="text-sm font-medium">Thurs</div>
        <div className="text-sm font-medium">Fri</div>
        {Array.from({
        length: 31
      }).map((_, index) => {
        const day = index + 1;
        const isToday = day === 7;
        const isActive = day === 7;
        const isHighlighted = [9].includes(day);
        let classes = 'h-10 w-10 flex items-center justify-center rounded-md mx-auto';
        if (isToday) classes += ' bg-blue-500 text-white';else if (isHighlighted) classes += ' border-2 border-blue-500';
        return <div key={`day-${day}`}>
              <button className={classes}>{day}</button>
            </div>;
      })}
      </div>
      {tasks.map(task => <div key={task.id} className="mb-6 bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">{task.hotel}</h3>
              <div className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${task.status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                {task.status}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">{task.serviceType}</h4>
            <p className="text-sm text-gray-500">
              Estimated Duration: {task.estimatedDuration}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">
                {task.date}
                <br />
                Start Time: {task.time}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Assigned To:</p>
              <div className="flex items-center">
                <span className="mr-2">{task.team}</span>
                <div className="flex">
                  {Array.from({
                length: 3
              }).map((_, i) => <div key={i} className="h-8 w-8 rounded-full bg-gray-300 -ml-2 first:ml-0"></div>)}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
              Done
            </button>
          </div>
        </div>)}
    </div>;
};