// src/pages/Bookings/SearchBook.js
import React, { useState } from 'react';
// import SearchForm from '../../components/forms/SearchForm';
import AvailabilityResults from './AvailabilityResults';
// import { vehicleAPI } from '../../services/api/vehicleAPI';
import LoadingSpinner from '../../Common/Spinner';

const SearchBook = () => {
//   const [availableVehicles, setAvailableVehicles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchPerformed, setSearchPerformed] = useState(false);

//   const handleSearch = async (filters) => {
//     if (!filters.startDate || !filters.endDate) {
//       alert('Please select both start and end dates');
//       return;
//     }

//     setLoading(true);
//     try {
//       // Mock data for demonstration
//       const mockResults = [
//         {
//           id: 1,
//           make: 'Toyota',
//           model: 'Camry',
//           year: 2023,
//           type: 'car',
//           pricePerDay: 45,
//           available: true
//         },
//         {
//           id: 2,
//           make: 'Honda',
//           model: 'CR-V',
//           year: 2023,
//           type: 'suv',
//           pricePerDay: 60,
//           available: true
//         }
//       ];
      
//       setAvailableVehicles(mockResults);
//       setSearchPerformed(true);
//     } catch (error) {
//       alert('Error searching vehicles: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <LoadingSpinner />;
//   }

  return (
    <div className="search-book-page">
      <div className="page-header">
        <h1>Search & Book Vehicles</h1>
      </div>

      {/* <SearchForm onSearch={handleSearch} loading={loading} /> */}

      {/* {searchPerformed && (
        <AvailabilityResults 
          vehicles={availableVehicles}
          loading={loading}
          searchParams={{}}
        />
      )} */}
    </div>
  );
};

export default SearchBook;