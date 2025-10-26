import { useState, useEffect } from 'react';
// import { vehicleAPI } from '../../../services/api';
// import { useNotification } from '../../../context/NotificationContext';

// const useVehicles = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { showNotification } = useNotification();

//   useEffect(() => {
//     fetchVehicles();
//   }, []);

//   const fetchVehicles = async () => {
//     try {
//       setLoading(true);
//       const data = await vehicleAPI.getAllVehicles();
//       setVehicles(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       showNotification('Error', 'Failed to load vehicles', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteVehicle = async (id) => {
//     try {
//       await vehicleAPI.deleteVehicle(id);
//       setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
//       showNotification('Success', 'Vehicle deleted successfully', 'success');
//     } catch (err) {
//       showNotification('Error', err.message, 'error');
//     }
//   };

//   return {
//     vehicles,
//     loading,
//     error,
//     deleteVehicle,
//     refetch: fetchVehicles
//   };
// };

// export default useVehicles;