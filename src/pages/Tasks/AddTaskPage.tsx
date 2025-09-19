import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
export const AddTaskPage = () => {
  return <div>
      <div className="mb-6 flex items-center">
        <Link to="/tasks" className="text-blue-500 flex items-center mr-4">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Tasks
        </Link>
        <h1 className="text-2xl font-bold">Add New Task</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <form>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Name
              </label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter task name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Select Client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <input type="time" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (estimated)
              </label>
              <div className="flex">
                <input type="number" className="w-20 px-3 py-2 border border-gray-300 rounded-l-md" placeholder="0" />
                <select className="px-3 py-2 border border-gray-300 border-l-0 rounded-r-md">
                  <option>hours</option>
                  <option>minutes</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Normal</option>
                <option>Urgent</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assign Team
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Select Team</option>
                <option>Team 1</option>
                <option>Team 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Select Service Type</option>
                <option>Hotel Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Daily Room Cleaning</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Description
            </label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md h-32" placeholder="Enter task description"></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <Link to="/tasks" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
              Cancel
            </Link>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>;
};