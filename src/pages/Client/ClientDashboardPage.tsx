import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon, StarIcon } from 'lucide-react';
import { AppointmentCard } from '../../components/client/AppointmentCard';
import { ServiceCard } from '../../components/client/ServiceCard';
export const ClientDashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 6, 7)); // July 7, 2025
  // Mock data for calendar
  const days = [1, 2, 3, 4, 5];
  const daysOfWeek = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
  return <div>
      <div className="bg-blue-500 text-white p-8 rounded-lg mb-6">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Hi, Adam</h1>
            <p className="text-xl mt-2">
              What needs <span className="font-bold">cleaning</span> today?
            </p>
            <Link to="/booking" className="mt-4 inline-flex items-center bg-white text-blue-500 px-4 py-2 rounded-md">
              Explore Services <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div>
            <img src="/MF_Dashboard_Page-_P1_Final.png" alt="Cleaning service illustration" className="h-48 w-auto" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-500">Today is</p>
            <p className="text-lg font-medium">July 7, 2025</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-md border">
              <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
            </button>
            <button className="p-1 rounded-md border">
              <ChevronRightIcon className="h-5 w-5 text-blue-500" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-8">
          {daysOfWeek.map((day, index) => <div key={index} className="text-center">
              <p className="text-sm text-gray-500">{day}</p>
              {index >= 2 && index <= 6 && <button className={`mt-1 w-10 h-10 flex items-center justify-center rounded-md mx-auto ${index === 2 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                  {days[index - 2]}
                </button>}
            </div>)}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Ongoing Appointments</h2>
        <AppointmentCard serviceType="Deep Cleaning" date="July 7, 2025" time="10:00 am" duration="1 hr 30 m" progress={30} rooms={['Room 123', 'Room 124', 'Room 125', 'Room 126']} onEdit={() => {}} onDelete={() => {}} />
      </div>
      <div>
        <h2 className="text-lg font-medium mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Top Choice" description="Hotel Cleaning" rating={3.0} services={['Room Cleaning, Linen Cleaning,', 'Window Cleaning, Rug Cleaning']} icon={<StarIcon className="h-8 w-8 fill-blue-500" />} onClick={() => {}} />
          <ServiceCard title="Special Find" description="Deep Cleaning" rating={4.0} services={['Toilet Cleaning, Linen Cleaning,', 'Window Cleaning']} icon={<StarIcon className="h-8 w-8 fill-blue-500" />} onClick={() => {}} />
          <ServiceCard title="Worth Discovering" description="Residential Cleaning" services={['Room Cleaning, Specialty Cleaning,', 'Window Cleaning, Small-Scale Cleaning']} icon={<StarIcon className="h-8 w-8 fill-blue-500" />} onClick={() => {}} />
        </div>
      </div>
    </div>;
};