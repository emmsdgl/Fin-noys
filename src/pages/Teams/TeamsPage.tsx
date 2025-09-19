import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
export const TeamsPage = () => {
  // Mock team data
  const teams = [{
    id: 1,
    name: 'Team 1',
    members: 5,
    leader: 'John Smith',
    tasksCompleted: 24,
    tasksInProgress: 3,
    performance: 92
  }, {
    id: 2,
    name: 'Team 2',
    members: 4,
    leader: 'Sarah Johnson',
    tasksCompleted: 18,
    tasksInProgress: 2,
    performance: 87
  }, {
    id: 3,
    name: 'Team 3',
    members: 6,
    leader: 'Michael Brown',
    tasksCompleted: 32,
    tasksInProgress: 5,
    performance: 95
  }];
  return <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Teams Management</h1>
          <p className="text-gray-500">Manage cleaning teams and members</p>
        </div>
        <Link to="/teams/add" className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm flex items-center">
          <PlusIcon className="h-4 w-4 mr-1" />
          New Team
        </Link>
      </div>
      <div className="bg-white rounded-lg overflow-hidden border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Team Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Members
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Team Leader
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Tasks Completed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Tasks In Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Performance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map(team => <tr key={team.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {team.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <span>{team.members}</span>
                    <div className="ml-2 flex -space-x-1">
                      <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-400 border-2 border-white"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-500 border-2 border-white"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {team.leader}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {team.tasksCompleted}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {team.tasksInProgress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{
                    width: `${team.performance}%`
                  }}></div>
                    </div>
                    <span className="ml-2">{team.performance}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <Link to={`/teams/edit/${team.id}`} className="text-blue-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </Link>
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
    </div>;
};