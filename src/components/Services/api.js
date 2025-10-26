import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Vehicle APIs
  addVehicle: (vehicleData) => axios.post(`${API_BASE_URL}/vehicles`, vehicleData),
  getAvailableVehicles: (params) => axios.get(`${API_BASE_URL}/vehicles/available`, { params }),
  
  // Booking APIs
  createBooking: (bookingData) => axios.post(`${API_BASE_URL}/bookings`, bookingData),
};