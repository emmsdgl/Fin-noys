import React from 'react';
import { ClockIcon, TrashIcon, PencilIcon } from 'lucide-react';
interface AppointmentCardProps {
  serviceType: string;
  date: string;
  time: string;
  duration: string;
  progress?: number;
  rooms?: string[];
  onEdit?: () => void;
  onDelete?: () => void;
}
export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  serviceType,
  date,
  time,
  duration,
  progress,
  rooms,
  onEdit,
  onDelete
}) => {
  return <div className="bg-white rounded-lg border p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
            In Progress
          </div>
          <h3 className="font-medium mt-2">{serviceType}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex space-x-2">
          {onEdit && <button onClick={onEdit} className="p-1 text-blue-500 hover:text-blue-700">
              <PencilIcon className="h-5 w-5" />
            </button>}
          {onDelete && <button onClick={onDelete} className="p-1 text-red-500 hover:text-red-700">
              <TrashIcon className="h-5 w-5" />
            </button>}
        </div>
      </div>
      <div className="flex items-center mb-2">
        <ClockIcon className="h-4 w-4 text-blue-500 mr-1" />
        <span className="text-sm">
          {time} • {duration}
        </span>
      </div>
      {rooms && rooms.length > 0 && <div className="flex flex-wrap gap-1 mb-3">
          {rooms.map((room, index) => <div key={index} className="px-2 py-1 bg-gray-100 text-xs rounded">
              {room}
            </div>)}
        </div>}
      {progress !== undefined && <div className="mt-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{
          width: `${progress}%`
        }}></div>
          </div>
        </div>}
    </div>;
};