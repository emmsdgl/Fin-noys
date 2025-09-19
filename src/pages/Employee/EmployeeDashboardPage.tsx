import React from 'react';
import { ClockIcon } from 'lucide-react';
export const EmployeeDashboardPage = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const month = today.toLocaleDateString('en-US', {
    month: 'long'
  });
  const day = today.getDate();
  const year = today.getFullYear();
  // Mock data for calendar
  const daysInMonth = 31;
  const currentDay = 7;
  const daysOfWeek = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
  // Mock data for tasks
  const tasks = [{
    id: 1,
    status: 'Ongoing',
    serviceType: 'Service Type',
    client: 'Client 1',
    team: 'Team 1',
    date: '21/08/25',
    time: '2:00 pm',
    duration: '1hr 30 mins'
  }, {
    id: 2,
    status: 'Incomplete',
    serviceType: 'Service Type',
    client: 'Client 1',
    team: 'Team 2',
    date: '21/08/25',
    time: '2:00 pm',
    duration: '1hr 30 mins'
  }];
  // Mock data for completed tasks
  const completedTasks = [{
    id: 3,
    status: 'Complete',
    serviceType: 'Service Type',
    client: 'Client 1',
    team: 'Team 1',
    date: '21/08/25',
    time: '2:00 pm',
    duration: '1hr'
  }];
  // Mock data for team assignments
  const teamAssignments = [{
    id: 1,
    status: 'Current',
    team: 'Team A',
    members: ['Emma', 'Adam', 'Leira', 'Sushmita'],
    dateRange: 'Jul 7 - Jul 12'
  }, {
    id: 2,
    status: 'Upcoming',
    team: 'Team A',
    members: ['Emma', 'Adam', 'Leira', 'Sushmita'],
    dateRange: 'Jul 13 - Jul 18'
  }];
  return <div>
      <div className="bg-blue-500 text-white p-8 rounded-lg mb-6 relative overflow-hidden">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Hello, Adam</h1>
            <p className="text-xl mt-2">
              Complete your assigned tasks and track them in the dashboard
            </p>
          </div>
          <div className="relative z-10">
            <img src="/MF_Employee_Dashboard_Page-_P1.png" alt="Dashboard illustration" className="h-48 w-auto" />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">
            Tasks For Today <span className="text-xs text-gray-500">(3)</span>
          </h2>
          <div className="text-sm">
            <p>Today is</p>
            <p className="font-medium">July 7, 2025</p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-6">
          {daysOfWeek.map((day, index) => <div key={index} className="text-center">
              <p className="text-xs text-gray-500">{day}</p>
            </div>)}
          {Array.from({
          length: 31
        }).map((_, index) => {
          const day = index + 1;
          const isToday = day === currentDay;
          const isActive = [7, 8, 9, 10, 11, 12].includes(day);
          const isGreen = [13, 14, 15, 16, 17, 18].includes(day);
          let bgColor = 'hover:bg-gray-100';
          if (isToday) bgColor = 'bg-blue-500 text-white';else if (isActive) bgColor = 'bg-blue-100';else if (isGreen) bgColor = 'bg-green-500 text-white';
          return <div key={`day-${day}`} className="text-center">
                <button className={`w-10 h-10 flex items-center justify-center rounded-md mx-auto ${bgColor}`}>
                  {day}
                </button>
              </div>;
        })}
        </div>
        {tasks.map(task => <div key={task.id} className="bg-blue-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div className={`px-2 py-1 text-xs rounded-full ${task.status === 'Ongoing' ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}>
                {task.status}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-medium">{task.serviceType}</h3>
              <p className="text-sm text-gray-500">{task.client}</p>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-sm">Team {task.team}</span>
              <div className="flex ml-2">
                {Array.from({
              length: 3
            }).map((_, i) => <div key={i} className="h-8 w-8 rounded-full bg-gray-300 -ml-2 first:ml-0"></div>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="text-sm">{task.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">From</p>
                <p className="text-sm">{task.time}</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-500">Estimated Duration</p>
              <p className="text-sm">{task.duration}</p>
            </div>
            <div className="flex mt-3">
              <div className="flex space-x-1">
                {Array.from({
              length: 3
            }).map((_, i) => <div key={i} className="h-2 w-8 bg-gray-200 rounded"></div>)}
              </div>
            </div>
          </div>)}
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">
          Tasks Completed <span className="text-xs text-gray-500">(1)</span>
        </h2>
        {completedTasks.map(task => <div key={task.id} className="bg-blue-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                {task.status}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-medium">{task.serviceType}</h3>
              <p className="text-sm text-gray-500">{task.client}</p>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-sm">Team {task.team}</span>
              <div className="flex ml-2">
                {Array.from({
              length: 3
            }).map((_, i) => <div key={i} className="h-8 w-8 rounded-full bg-gray-300 -ml-2 first:ml-0"></div>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="text-sm">{task.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">From</p>
                <p className="text-sm">{task.time}</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-500">Cleaning Duration</p>
              <p className="text-sm">{task.duration}</p>
            </div>
            <div className="flex mt-3">
              <div className="flex space-x-1">
                {Array.from({
              length: 3
            }).map((_, i) => <div key={i} className="h-2 w-8 bg-gray-200 rounded"></div>)}
              </div>
            </div>
          </div>)}
      </div>
      <div>
        <h2 className="text-lg font-medium mb-4">Team Assignment</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">All</span>
          </div>
          {teamAssignments.map(assignment => <div key={assignment.id} className="mb-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div className={`px-2 py-1 text-xs rounded-full ${assignment.status === 'Current' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {assignment.status}
                </div>
                <span className="text-sm">{assignment.dateRange}</span>
              </div>
              <div className="mt-2">
                <h3 className="font-medium">{assignment.team}</h3>
                <p className="text-sm text-gray-500">
                  {assignment.members.join(', ')}
                </p>
              </div>
              <div className="flex mt-2">
                {Array.from({
              length: 4
            }).map((_, i) => <div key={i} className="h-8 w-8 rounded-full bg-gray-300 -ml-2 first:ml-0"></div>)}
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};