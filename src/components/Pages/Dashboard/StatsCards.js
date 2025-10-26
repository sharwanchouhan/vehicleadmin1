import React from 'react';

const StatsCards = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Vehicles',
      value: stats.totalVehicles || 0,
      icon: '🚗',
      color: 'primary',
      link: '/vehicles'
    },
    {
      title: 'Available Vehicles',
      value: stats.availableVehicles || 0,
      icon: '✅',
      color: 'success',
      link: '/vehicles?status=available'
    },
    {
      title: 'Active Bookings',
      value: stats.activeBookings || 0,
      icon: '📅',
      color: 'info',
      link: '/bookings?status=active'
    },
    {
      title: 'Revenue Today',
      value: `$${stats.revenueToday || 0}`,
      icon: '💰',
      color: 'warning',
      link: '/bookings'
    }
  ];

  return (
    <div className="row mb-4">
      {statCards.map((stat, index) => (
        <div key={index} className="col-md-3 col-sm-6 mb-3">
          <div className={`card border-${stat.color} h-100`}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-title text-muted">{stat.title}</h6>
                  <h3 className="card-text">{stat.value}</h3>
                </div>
                <span className="display-4">{stat.icon}</span>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <a href={stat.link} className="btn btn-sm btn-outline-primary">
                View Details →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;