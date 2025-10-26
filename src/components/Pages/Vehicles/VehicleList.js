import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import VehicleTable from './VehicleTable';
// import SearchFilters from '../../Common/SearchFilters';
// import useVehicles from './VehiclesHooks/useVehicles';

const VehicleList = () => {
  // const { vehicles, loading, error, deleteVehicle } = useVehicles();
  // const [filters, setFilters] = useState({
  //   vehicleType: '',
  //   priceRange: '',
  //   status: ''
  // });

  // const filteredVehicles = vehicles.filter(vehicle => {
  //   return (
  //     (!filters.vehicleType || vehicle.type === filters.vehicleType) &&
  //     (!filters.status || vehicle.status === filters.status) &&
  //     (!filters.priceRange || checkPriceRange(vehicle.pricePerDay, filters.priceRange))
  //   );
  // });

  // const checkPriceRange = (price, range) => {
  //   const ranges = {
  //     '0-50': price <= 50,
  //     '50-100': price > 50 && price <= 100,
  //     '100-200': price > 100 && price <= 200,
  //     '200+': price > 200
  //   };
  //   return ranges[range] || true;
  // };

  // const handleFilterChange = (filterType, value) => {
  //   setFilters(prev => ({ ...prev, [filterType]: value }));
  // };

  // const handleResetFilters = () => {
  //   setFilters({
  //     vehicleType: '',
  //     priceRange: '',
  //     status: ''
  //   });
  // };

  // const handleDelete = async (id) => {
  //   if (window.confirm('Are you sure you want to delete this vehicle?')) {
  //     await deleteVehicle(id);
  //   }
  // };

  // if (error) {
  //   return (
  //     <div className="alert alert-danger">
  //       Error loading vehicles: {error}
  //     </div>
  //   );
  // }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Vehicles Management</h1>
        <Link to="/vehicles/add" className="btn btn-primary">
          ➕ Add New Vehicle
        </Link>
      </div>

      {/* <SearchFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
      /> */}

      {/* <VehicleTable 
        vehicles={filteredVehicles}
        loading={loading}
        onEdit={(id) => window.location.href = `/vehicles/edit/${id}`}
        onDelete={handleDelete}
      /> */}
    </div>
  );
};

export default VehicleList;