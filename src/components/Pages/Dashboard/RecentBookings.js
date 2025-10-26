import React from 'react';
import { Link } from 'react-router-dom';

const RecentBookings = ({ bookings }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { class: 'bg-primary', text: 'Confirmed' },
      active: { class: 'bg-success', text: 'Active' },
      completed: { class: 'bg-secondary', text: 'Completed' },
      cancelled: { class: 'bg-danger', text: 'Cancelled' }
    };
    
    const config = statusConfig[status] || statusConfig.confirmed;
    return <span className={`badge ${config.class}`}>{config.text}</span>;
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Recent Bookings</h5>
        <Link to="/bookings" className="btn btn-sm btn-outline-primary">
          View All
        </Link>
      </div>
      <div className="card-body">
        {bookings.length === 0 ? (
          <p className="text-muted text-center">No recent bookings</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Vehicle</th>
                  <th>Period</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id}>
                    <td>{booking.customerName}</td>
                    <td>{booking.vehicleMake} {booking.vehicleModel}</td>
                    <td>
                      {new Date(booking.startDate).toLocaleDateString()} - {' '}
                      {new Date(booking.endDate).toLocaleDateString()}
                    </td>
                    <td>${booking.totalAmount}</td>
                    <td>{getStatusBadge(booking.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentBookings;