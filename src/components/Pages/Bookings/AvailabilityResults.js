import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleCard from '../Vehicles/VehicleCard';
import BookingForm from '../../forms/BookingForm';
import Modal from '../../Ui/Modal';
// import { bookingAPI } from '../../../services/api';
// import { useNotification } from '../../../components/Context/NotificationContext';

const AvailabilityResults = ({ vehicles, loading }) => {
//   const navigate = useNavigate();
//   const { showNotification } = useNotification();
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [showBookingModal, setShowBookingModal] = useState(false);
//   const [bookingLoading, setBookingLoading] = useState(false);

//   const handleBookVehicle = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     setShowBookingModal(true);
//   };

//   const handleBookingSubmit = async (bookingData) => {
//     setBookingLoading(true);
//     try {
//       await bookingAPI.createBooking({
//         ...bookingData,
//         vehicleId: selectedVehicle.id,
//         totalAmount: calculateTotalAmount(selectedVehicle.pricePerDay, bookingData.startDate, bookingData.endDate)
//       });
      
//       showNotification('Success', 'Booking created successfully!', 'success');
//       setShowBookingModal(false);
//       navigate('/bookings');
//     } catch (error) {
//       showNotification('Error', error.message, 'error');
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   const calculateTotalAmount = (pricePerDay, startDate, endDate) => {
//     const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
//     return days * pricePerDay;
//   };

//   if (loading) {
//     return (
//       <div className="text-center p-4">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

  return (
    <>
      {/* <div className="card mt-4">
        <div className="card-header">
          <h5 className="card-title mb-0">
            Available Vehicles ({vehicles.length} found)
          </h5>
        </div>
        <div className="card-body">
          {vehicles.length === 0 ? (
            <div className="alert alert-info text-center">
              <h5>No vehicles available for the selected criteria</h5>
              <p>Please try different dates or filters.</p>
            </div>
          ) : (
            <div className="row">
              {vehicles.map(vehicle => (
                <div key={vehicle.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h6 className="card-title mb-0">
                        {vehicle.make} {vehicle.model}
                      </h6>
                      <span className="badge bg-success">Available</span>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Year:</strong> {vehicle.year}<br />
                        <strong>Type:</strong> {vehicle.type}<br />
                        <strong>Price:</strong> ${vehicle.pricePerDay}/day
                      </p>
                      {vehicle.description && (
                        <p className="card-text small text-muted">
                          {vehicle.description}
                        </p>
                      )}
                    </div>
                    <div className="card-footer">
                      <button 
                        onClick={() => handleBookVehicle(vehicle)}
                        className="btn btn-primary w-100"
                      >
                        Book This Vehicle
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        title="Book Vehicle"
        size="lg"
      >
        <BookingForm
          vehicle={selectedVehicle}
          onSubmit={handleBookingSubmit}
          onCancel={() => setShowBookingModal(false)}
          isLoading={bookingLoading}
        />
      </Modal> */}
    </>
  );
};

export default AvailabilityResults;