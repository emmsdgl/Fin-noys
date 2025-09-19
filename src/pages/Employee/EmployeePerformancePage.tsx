import React from 'react';
export const EmployeePerformancePage = () => {
  // Mock data for performance metrics
  const performanceMetrics = [{
    title: 'Completion Rate',
    value: '20%',
    change: '+5%',
    period: 'This Month'
  }, {
    title: 'Attendance Rate',
    value: '100%',
    change: '+0%',
    period: 'This Month'
  }, {
    title: 'Hours Worked',
    value: '75 hrs',
    change: '-3%',
    period: 'This Month'
  }];
  // Mock data for daily performance chart
  const dailyPerformance = Array.from({
    length: 27
  }, () => Math.floor(Math.random() * 300) + 50);
  return <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Performance Report</h1>
        <p className="text-gray-500">Take a peek off your performance charts</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {performanceMetrics.map((metric, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-500">{metric.title}</h3>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold">{metric.value}</span>
              <span className={`ml-2 px-2 py-1 text-xs rounded ${metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : metric.change.startsWith('-') ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                {metric.change}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{metric.period}</p>
          </div>)}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-medium">Analytics</h2>
            <p className="text-sm text-gray-500">
              Performance Analytics of Last 30 days
            </p>
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-50 text-blue-500 rounded-md flex items-center">
              Show:
              <span className="font-medium ml-2">Month</span>
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="h-64">
          <div className="h-full relative">
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-48">
              {dailyPerformance.map((value, index) => <div key={index} className="bg-blue-500 w-3" style={{
              height: `${value / 4}%`
            }}></div>)}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-2 border-t border-gray-200">
              {Array.from({
              length: 27
            }).map((_, index) => <div key={index} className="text-xs text-gray-500 text-center w-3">
                  {index + 1}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};