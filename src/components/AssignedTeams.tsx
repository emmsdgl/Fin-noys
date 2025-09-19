import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const AssignedTeams = () => {
  const teams = [{
    id: 1,
    name: 'Team 1',
    members: ['Emmaus', 'Adam', 'Leira'],
    from: 'June 1',
    to: 'June 30',
    days: ['M', 'T', 'TH'],
    progress: 30,
    status: 'Complete',
    assigned: 'Assigned'
  }, {
    id: 2,
    name: 'Team 1',
    members: ['Emmaus', 'Adam', 'Leira'],
    from: 'June 1',
    to: 'June 30',
    days: ['M', 'T', 'TH'],
    progress: 30,
    status: 'Complete',
    assigned: 'Assigned'
  }, {
    id: 3,
    name: 'Team 1',
    members: ['Emmaus', 'Adam', 'Leira'],
    from: 'June 1',
    to: 'June 30',
    days: ['M', 'T', 'TH'],
    progress: 30,
    status: 'Complete',
    assigned: 'Unassigned'
  }];
  return <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">
          Assigned Teams{' '}
          <span className="text-xs bg-gray-100 px-1 rounded">(3)</span>
        </h2>
        <div className="flex items-center">
          <div className="flex items-center bg-blue-50 rounded-md px-4 py-2 text-sm">
            <span>Show:</span>
            <span className="ml-2">Assigned</span>
            <ChevronDownIcon className="h-4 w-4 ml-2" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {teams.map(team => <div key={team.id} className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex space-x-2 mb-3">
              <span className={`text-xs px-2 py-0.5 rounded-full ${team.status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {team.status}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${team.assigned === 'Assigned' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                {team.assigned}
              </span>
            </div>
            <h3 className="font-medium">{team.name}</h3>
            <p className="text-sm text-gray-500">{team.members.join(', ')}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-gray-500">From</p>
                <p>{team.from}</p>
              </div>
              <div>
                <p className="text-gray-500">To</p>
                <p>{team.to}</p>
              </div>
              <div>
                <p className="text-gray-500">Days</p>
                <p>{team.days.join(', ')}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs mb-1">
                <span>{team.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{
              width: `${team.progress}%`
            }}></div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};