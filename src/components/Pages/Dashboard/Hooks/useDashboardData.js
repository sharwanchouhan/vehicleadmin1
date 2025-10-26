import { useState, useEffect } from 'react';
import { bookingAPI, vehicleAPI } from '../../../services/api';

const useDashboardData = () => {
  const [stats, setStats] = useState({});
  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch data in parallel
        const [vehiclesData, bookingsData] = await Promise.all([
          vehicleAPI.getAllVehicles(),
          bookingAPI.getAllBookings()
        ]);

        // Calculate stats
        const totalVehicles = vehiclesData.length;
        const availableVehicles = vehiclesData.filter(v => v.status === 'available').length;
        const activeBookings = bookingsData.filter(b => b.status === 'active').length;
        const revenueToday = bookingsData
          .filter(b => new Date(b.startDate).toDateString() === new Date().toDateString())
          .reduce((sum, booking) => sum + booking.totalAmount, 0);

        setStats({
          totalVehicles,
          availableVehicles,
          activeBookings,
          revenueToday
        });

        // Get recent bookings (last 5)
        const recent = bookingsData
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        
        setRecentBookings(recent);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { stats, recentBookings, loading };
};

export default useDashboardData;