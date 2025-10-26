import React from 'react';

const BookingCard = ({ booking, onStatusUpdate }) => {
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

  const canUpdateStatus = (currentStatus) => {
    const allowedUpdates = {
      confirmed: ['active', 'cancelled'],
      active: ['completed'],
      completed: [],
      cancelled: []
    };
    return allowedUpdates[currentStatus];
  };

  const handleStatusChange = (newStatus) => {
    if (window.confirm(`Are you sure you want to change status to ${newStatus}?`)) {
      onStatusUpdate(booking.id, newStatus);
    }
  };

  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="card-title mb-0">Booking #{booking.id}</h6>
        {getStatusBadge(booking.status)}
      </div>
      <div className="card-body">
        <h6 className="text-primary">{booking.vehicleMake} {booking.vehicleModel}</h6>
        <p className="mb-2">
          <strong>Customer:</strong> {booking.customerName}<br />
          <strong>Period:</strong> {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}<br />
          <strong>Total Amount:</strong> ${booking.totalAmount}
        </p>
        
        {booking.specialRequests && (
          <div className="mt-2">
            <strong>Special Requests:</strong>
            <p className="small text-muted mb-0">{booking.specialRequests}</p>
          </div>
        )}
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            Created: {new Date(booking.createdAt).toLocaleDateString()}
          </small>
          
          {canUpdateStatus(booking.status).length > 0 && (
            <div className="dropdown">
              <button 
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Update Status
              </button>
              <ul className="dropdown-menu">
                {canUpdateStatus(booking.status).map(status => (
                  <li key={status}>
                    <button 
                      className="dropdown-item"
                      onClick={() => handleStatusChange(status)}
                    >
                      Mark as {status}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;