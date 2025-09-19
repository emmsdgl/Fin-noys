import React from 'react';
import { format, addDays, subDays } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}
export const Calendar = ({
  selectedDate,
  setSelectedDate
}: CalendarProps) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const handlePrevDay = () => {
    setSelectedDate(subDays(selectedDate, 1));
  };
  const handleNextDay = () => {
    setSelectedDate(addDays(selectedDate, 1));
  };
  return <div className="space-y-4">
      <div className="flex items-center">
        <div>
          <p className="text-sm text-gray-500">Today is</p>
          <p className="text-lg font-medium">
            {format(selectedDate, 'MMMM d, yyyy')}
          </p>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button onClick={handlePrevDay} className="p-1 rounded-md hover:bg-gray-100">
            <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
          </button>
          <button onClick={handleNextDay} className="p-1 rounded-md hover:bg-gray-100">
            <ChevronRightIcon className="h-5 w-5 text-blue-500" />
          </button>
        </div>
      </div>
      <div className="flex space-x-4">
        {daysOfWeek.map((day, index) => {
        const date = new Date(2025, 6, index + 1); // First week of July 2025
        const isSelected = date.getDate() === selectedDate.getDate();
        return <div key={index} className="text-center">
              <p className="text-sm text-gray-500">{day}</p>
              <button className={`mt-1 w-10 h-10 flex items-center justify-center rounded-md ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`} onClick={() => setSelectedDate(date)}>
                {date.getDate()}
              </button>
            </div>;
      })}
      </div>
    </div>;
};