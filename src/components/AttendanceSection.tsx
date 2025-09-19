import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { ClockIcon } from 'lucide-react';
export const AttendanceSection = () => {
  const attendanceData = [{
    name: 'Present',
    value: 60,
    color: '#2fbc00'
  }, {
    name: 'Absent',
    value: 20,
    color: '#ff1823'
  }, {
    name: 'Late',
    value: 20,
    color: '#ff7f00'
  }];
  const onTimeArrivals = [{
    name: 'Emmaus',
    id: '1234566',
    time: '1 hr 20 m'
  }, {
    name: 'Adam',
    id: '3483947',
    time: '1 hr 30 m'
  }, {
    name: 'Reigne',
    id: '8490584',
    time: '1 hr 0 m'
  }];
  const lateArrivals = [{
    name: 'Nicole',
    id: '6856954',
    time: '10m'
  }, {
    name: 'Dela',
    id: '7567567',
    time: '30m'
  }];
  const missing = [{
    name: 'Leira',
    id: '7674345',
    status: 'Checked Out'
  }, {
    name: 'Juan',
    id: '4345456',
    status: 'Check In'
  }];
  return <div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Attendance</h2>
        <div className="flex items-center text-sm">
          <span>7 July 2025</span>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <PieChart width={200} height={200}>
          <Pie data={attendanceData} cx={100} cy={100} innerRadius={60} outerRadius={80} dataKey="value">
            {attendanceData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
          </Pie>
        </PieChart>
      </div>
      <div className="mt-6 space-y-1">
        <div className="flex items-center text-sm">
          <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
          <span>Expected (13)</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
          <span>Present (6)</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
          <span>Absent (7)</span>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-medium mb-4">On Time Arrivals</h3>
        {onTimeArrivals.map((person, index) => <div key={index} className="flex items-center justify-between mb-3">
            <div>
              <p className="font-medium">{person.name}</p>
              <p className="text-xs text-gray-500">{person.id}</p>
            </div>
            <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full flex items-center">
              <ClockIcon className="h-3 w-3 mr-1" />
              {person.time}
            </div>
          </div>)}
      </div>
      <div className="mt-8">
        <h3 className="font-medium mb-4">Late Arrivals</h3>
        {lateArrivals.map((person, index) => <div key={index} className="flex items-center justify-between mb-3">
            <div>
              <p className="font-medium">{person.name}</p>
              <p className="text-xs text-gray-500">{person.id}</p>
            </div>
            <div className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full flex items-center">
              <ClockIcon className="h-3 w-3 mr-1" />
              {person.time}
            </div>
          </div>)}
      </div>
      <div className="mt-8">
        <h3 className="font-medium mb-4">Missing</h3>
        {missing.map((person, index) => <div key={index} className="flex items-center justify-between mb-3">
            <div>
              <p className="font-medium">{person.name}</p>
              <p className="text-xs text-gray-500">{person.id}</p>
            </div>
            <div className={`text-xs px-3 py-1 rounded-full ${person.status === 'Checked Out' ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}>
              {person.status}
            </div>
          </div>)}
      </div>
    </div>;
};