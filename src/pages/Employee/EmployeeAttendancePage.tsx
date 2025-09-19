import React, { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
export const EmployeeAttendancePage = () => {
  const [activeTab, setActiveTab] = useState('all');
  // Mock data for attendance records
  const attendanceRecords = [{
    id: 1,
    date: 'Jul 7, 2025',
    timeIn: '9:00 am',
    timeOut: '2:00 pm',
    team: 'Team 1',
    status: 'Present'
  }, {
    id: 2,
    date: 'Jul 7, 2025',
    timeIn: '10:00 am',
    timeOut: '5:00 pm',
    team: 'Team 1',
    status: 'Late'
  }, {
    id: 3,
    date: 'Jul 7, 2025',
    timeIn: '12:00 pm',
    timeOut: '8:00 pm',
    team: 'Team 1',
    status: 'Absent'
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Attendance</h1>
        <p className="text-gray-500">Log Your Attendance Today</p>
      </div>
      <div className="bg-white rounded-lg mb-6">
        <div className="flex">
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'all' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('all')}>
            All Attendance
          </button>
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'absent' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('absent')}>
            Absent (4)
          </button>
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'present' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('present')}>
            Present (4)
          </button>
          <button className={`px-8 py-4 text-sm font-medium ${activeTab === 'late' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-500'}`} onClick={() => setActiveTab('late')}>
            Late (4)
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2 text-blue-500" />
          <span className="text-sm">Filter:</span>
          <button className="ml-2 px-3 py-1 border border-gray-300 rounded-md flex items-center">
            Select a Date
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Time In
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Time Out
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
            {attendanceRecords.map(record => <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {record.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500 font-medium">
                  {record.timeIn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.timeOut}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-900 mr-2">
                      {record.team}
                    </span>
                    <div className="flex -space-x-2">
                      {Array.from({
                    length: 3
                  }).map((_, i) => <div key={i} className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white"></div>)}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.status === 'Present' && <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                      Present
                    </span>}
                  {record.status === 'Late' && <span className="px-3 py-1 text-sm text-white bg-orange-500 rounded-full">
                      Late
                    </span>}
                  {record.status === 'Absent' && <span className="px-3 py-1 text-sm text-white bg-red-500 rounded-full">
                      Absent
                    </span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.status === 'Present' ? <span className="text-gray-400">No Logs Yet</span> : <span className="text-red-500">Closed</span>}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};