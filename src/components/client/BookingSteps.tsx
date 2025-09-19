import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
interface Step {
  number: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}
interface BookingStepsProps {
  currentStep: number;
  steps: {
    title: string;
    link: string;
  }[];
}
export const BookingSteps: React.FC<BookingStepsProps> = ({
  currentStep,
  steps
}) => {
  return <div className="flex justify-center items-center mb-10">
      <div className="flex items-center w-full max-w-2xl">
        {steps.map((step, index) => <Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === index + 1 ? 'bg-blue-500 text-white' : currentStep > index + 1 ? 'bg-blue-200 text-blue-700' : 'bg-gray-200 text-gray-500'}`}>
                {index + 1}
              </div>
              <div className="text-xs mt-2 text-center">{step.title}</div>
            </div>
            {index < steps.length - 1 && <div className={`flex-1 h-1 mx-2 ${currentStep > index + 1 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>}
          </Fragment>)}
      </div>
    </div>;
};