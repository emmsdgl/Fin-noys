import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, PlusIcon, SearchIcon } from 'lucide-react';
import { AppointmentCard } from '../../components/client/AppointmentCard';
export const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [sortBy, setSortBy] = useState('Date');
  // Mock appointments data
  const appointments = [{
    id: 1,
    serviceType: 'Deep Cleaning',
    date: 'July 7, 2025',
    time: '10:00 am',
    duration: '1 hr 30 m',
    progress: 30,
    rooms: ['Room 123', 'Room 124', 'Room 125', 'Room 126'],
    status: 'in-progress'
  }, {
    id: 2,
    serviceType: 'Residential Cleaning',
    date: 'July 11, 2025',
    time: '7:00 am',
    duration: '1 hr 30 m',
    status: 'upcoming'
  }, {
    id: 3,
    serviceType: 'Deep Cleaning',
    date: 'July 8, 2025',
    time: '3:00 pm',
    duration: '1 hr 30 m',
    status: 'review'
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <p className="text-gray-500">
          View and manage your cleaning appointments
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex">
          <button className={`px-4 py-2 text-sm font-medium ${activeTab === 'history' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('history')}>
            Appointments History
          </button>
          <button className={`px-4 py-2 text-sm font-medium ${activeTab === 'review' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('review')}>
            Appointments To Review
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input type="text" placeholder="Search appointments..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64" />
          </div>
          <div className="relative">
            <div className="flex items-center bg-blue-50 rounded-md px-4 py-2 text-sm">
              <span>Sort By:</span>
              <span className="ml-2">{sortBy}</span>
              <ChevronDownIcon className="h-4 w-4 ml-2" />
            </div>
          </div>
          <Link to="/booking" className="bg-blue-500 text-white rounded-md px-4 py-2 text-sm flex items-center">
            <PlusIcon className="h-4 w-4 mr-1" />
            Book Service
          </Link>
        </div>
      </div>
      {activeTab === 'history' ? <div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-orange-700">
                  You have an ongoing appointment.{' '}
                  <a href="#" className="font-medium underline text-orange-700 hover:text-orange-600">
                    View details
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appointments.map(appointment => <AppointmentCard key={appointment.id} serviceType={appointment.serviceType} date={appointment.date} time={appointment.time} duration={appointment.duration} progress={appointment.progress} rooms={appointment.rooms} onEdit={() => {}} onDelete={() => {}} />)}
          </div>
        </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.filter(appointment => appointment.status === 'review').map(appointment => <AppointmentCard key={appointment.id} serviceType={appointment.serviceType} date={appointment.date} time={appointment.time} duration={appointment.duration} onEdit={() => {}} onDelete={() => {}} />)}
        </div>}
    </div>;
};