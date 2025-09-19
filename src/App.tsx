import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { ClientLayout } from './components/layout/ClientLayout';
import { EmployeeLayout } from './components/layout/EmployeeLayout';
import { DashboardPage } from './pages/Dashboard';
import { OrdersPage } from './pages/Orders/OrdersPage';
import { TasksPage } from './pages/Tasks/TasksPage';
import { AddTaskPage } from './pages/Tasks/AddTaskPage';
import { TeamsPage } from './pages/Teams/TeamsPage';
import { EditTeamPage } from './pages/Teams/EditTeamPage';
import { AccountsPage } from './pages/Accounts/AccountsPage';
import { AnalyticsPage } from './pages/Analytics/AnalyticsPage';
// Client Pages
import { ClientDashboardPage } from './pages/Client/ClientDashboardPage';
import { AppointmentsPage } from './pages/Client/AppointmentsPage';
import { BookingPage } from './pages/Client/BookingPage';
import { PricingPage } from './pages/Client/PricingPage';
import { ContactsPage } from './pages/Client/ContactsPage';
// Employee Pages
import { EmployeeDashboardPage } from './pages/Employee/EmployeeDashboardPage';
import { EmployeeTasksPage } from './pages/Employee/EmployeeTasksPage';
import { EmployeeAttendancePage } from './pages/Employee/EmployeeAttendancePage';
import { EmployeePerformancePage } from './pages/Employee/EmployeePerformancePage';
export function App() {
  return <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="tasks/add" element={<AddTaskPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="teams/edit/:id" element={<EditTeamPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="accounts" element={<AccountsPage />} />
        </Route>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ClientDashboardPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        {/* Employee Routes */}
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboardPage />} />
          <Route path="tasks" element={<EmployeeTasksPage />} />
          <Route path="attendance" element={<EmployeeAttendancePage />} />
          <Route path="performance" element={<EmployeePerformancePage />} />
        </Route>
        {/* Redirect root to client dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>;
}