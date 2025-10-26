import React from 'react';
import { Link } from 'react-router-dom';
import StatsCards from './StatsCards';
import RecentBookings from './RecentBookings';
// import useDashboardData from './Hooks/useDashboardData';
import LoadingSpinner from '../../Common/Spinner';
const Dashboard = () => {
//   const { stats, recentBookings, loading } = useDashboardData();

//   if (loading) {
//     return (
//       <div className="container mt-4">
//         <LoadingSpinner text="Loading dashboard data..." />
//       </div>
//     );
//   }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard</h1>
        <div>
          <Link to="/search" className="btn btn-primary me-2">
            🔍 Search Vehicles
          </Link>
          <Link to="/vehicles/add" className="btn btn-success">
            ➕ Add Vehicle
          </Link>
        </div>
      </div>

      {/* <StatsCards stats={stats} /> */}
    {/* //   <RecentBookings bookings={recentBookings} /> */}
    </div>
  );
};

export default Dashboard;