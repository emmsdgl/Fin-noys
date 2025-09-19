import React from 'react';
import { StarIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  rating?: number;
  services: string[];
  icon: React.ReactNode;
  onClick?: () => void;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  rating,
  services,
  icon,
  onClick
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex flex-col items-center mb-4">
        <div className="text-blue-500 mb-2">{icon}</div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="mb-4">
        {services.map((service, index) => <div key={index} className="text-sm mb-1">
            {service}
          </div>)}
      </div>
      {rating !== undefined && <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
          <span className="ml-2 text-sm text-gray-600">
            {rating.toFixed(1)}
          </span>
        </div>}
      <button onClick={onClick} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Book Now
      </button>
    </div>;
};