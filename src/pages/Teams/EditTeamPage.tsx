import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, PlusIcon, TrashIcon } from 'lucide-react';
export const EditTeamPage = () => {
  const {
    id
  } = useParams();
  // Mock team data
  const team = {
    id: parseInt(id || '1'),
    name: `Team ${id}`,
    leader: 'John Smith',
    members: [{
      id: 1,
      name: 'John Smith',
      role: 'Team Leader',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg'
    }, {
      id: 2,
      name: 'Emily Johnson',
      role: 'Cleaner',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg'
    }, {
      id: 3,
      name: 'Michael Brown',
      role: 'Cleaner',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg'
    }, {
      id: 4,
      name: 'Sarah Wilson',
      role: 'Cleaner',
      photo: 'https://randomuser.me/api/portraits/women/4.jpg'
    }, {
      id: 5,
      name: 'David Lee',
      role: 'Cleaner',
      photo: 'https://randomuser.me/api/portraits/men/5.jpg'
    }]
  };
  return <div>
      <div className="mb-6 flex items-center">
        <Link to="/teams" className="text-blue-500 flex items-center mr-4">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Teams
        </Link>
        <h1 className="text-2xl font-bold">Edit {team.name}</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Team Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name
                </label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue={team.name} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Leader
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue={team.leader}>
                  {team.members.map(member => <option key={member.id} value={member.name}>
                      {member.name}
                    </option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Color
                </label>
                <div className="flex space-x-2">
                  {['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500'].map((color, index) => <div key={index} className={`h-8 w-8 rounded-full ${color} ${index === 0 ? 'ring-2 ring-offset-2 ring-blue-500' : ''} cursor-pointer`}></div>)}
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Team Members</h2>
              <button className="bg-blue-500 text-white rounded-md px-3 py-1.5 text-sm flex items-center">
                <PlusIcon className="h-4 w-4 mr-1" />
                Add Member
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                      Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {team.members.map(member => <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <img src={member.photo} alt={member.name} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {member.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-red-500 hover:text-red-700">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>;
};