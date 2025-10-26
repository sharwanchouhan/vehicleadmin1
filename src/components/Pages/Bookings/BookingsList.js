import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingCard from './BookingCard';
// import useBookings from './BookingHook/useBookings';

const BookingsList = () => {
//   const { bookings, loading, error, updateBookingStatus } = useBookings();
//   const [statusFilter, setStatusFilter] = useState('all');

//   const filteredBookings = bookings.filter(booking => 
//     statusFilter === 'all' || booking.status === statusFilter
//   );

//   const handleStatusUpdate = async (bookingId, newStatus) => {
//     await updateBookingStatus(bookingId, newStatus);
//   };

//   if (error) {
//     return (
//       <div className="alert alert-danger">
//         Error loading bookings: {error}
//       </div>
//     );
//   }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Bookings Management</h1>
        <Link to="/search" className="btn btn-primary">
          🔍 New Booking
        </Link>
      </div>

      {/* Status Filter */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="statusFilter" className="form-label">Filter by Status:</label>
              <select 
                id="statusFilter"
                className="form-select"
                // value={statusFilter}
                // onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="confirmed">Confirmed</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="col-md-9">
              {/* <div className="d-flex gap-2">
                <span className="badge bg-primary">Confirmed: {bookings.filter(b => b.status === 'confirmed').length}</span>
                <span className="badge bg-success">Active: {bookings.filter(b => b.status === 'active').length}</span>
                <span className="badge bg-secondary">Completed: {bookings.filter(b => b.status === 'completed').length}</span>
                <span className="badge bg-danger">Cancelled: {bookings.filter(b => b.status === 'cancelled').length}</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bookings Grid */}
      {/* {loading ? (
        <div className="text-center p-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {filteredBookings.length === 0 ? (
            <div className="col-12">
              <div className="alert alert-info text-center">
                <h5>No bookings found</h5>
                <p>Start by creating a new booking.</p>
                <Link to="/search" className="btn btn-primary">
                  Create New Booking
                </Link>
              </div>
            </div>
          ) : (
            filteredBookings.map(booking => (
              <div key={booking.id} className="col-lg-6 col-xl-4 mb-4">
                <BookingCard 
                  booking={booking}
                  onStatusUpdate={handleStatusUpdate}
                />
              </div>
            ))
          )}
        </div>
      )} */}
    </div>
  );
};

export default BookingsList;