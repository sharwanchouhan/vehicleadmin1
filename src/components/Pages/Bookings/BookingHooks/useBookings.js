// import { useState, useEffect } from 'react';
// import { bookingAPI } from '../../../Sevices/api';
// // import { useNotification } from '../../../context/NotificationContext';

// const useBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { showNotification } = useNotification();

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       setLoading(true);
//       const data = await bookingAPI.getAllBookings();
//       setBookings(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       showNotification('Error', 'Failed to load bookings', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateBookingStatus = async (bookingId, newStatus) => {
//     try {
//       await bookingAPI.updateBooking(bookingId, { status: newStatus });
//       setBookings(bookings.map(booking => 
//         booking.id === bookingId ? { ...booking, status: newStatus } : booking
//       ));
//       showNotification('Success', 'Booking status updated successfully', 'success');
//     } catch (err) {
//       showNotification('Error', err.message, 'error');
//     }
//   };

//   return {
//     bookings,
//     loading,
//     error,
//     updateBookingStatus,
//     refetch: fetchBookings
//   };
// };

// export default useBookings;