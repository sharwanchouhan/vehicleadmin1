import React from 'react';

const SearchFilters = ({ filters, onFilterChange, onReset }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="card-title mb-0">Search Filters</h5>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-3">
            <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
            <select 
              id="vehicleType"
              className="form-select"
              value={filters.vehicleType}
              onChange={(e) => onFilterChange('vehicleType', e.target.value)}
            >
              <option value="">All Types</option>
              <option value="car">Car</option>
              <option value="suv">SUV</option>
              <option value="van">Van</option>
              <option value="truck">Truck</option>
            </select>
          </div>
          
          <div className="col-md-3">
            <label htmlFor="priceRange" className="form-label">Price Range</label>
            <select 
              id="priceRange"
              className="form-select"
              value={filters.priceRange}
              onChange={(e) => onFilterChange('priceRange', e.target.value)}
            >
              <option value="">Any Price</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200+">$200+</option>
            </select>
          </div>
          
          <div className="col-md-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select 
              id="status"
              className="form-select"
              value={filters.status}
              onChange={(e) => onFilterChange('status', e.target.value)}
            >
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          
          <div className="col-md-3 d-flex align-items-end">
            <button 
              className="btn btn-outline-secondary w-100"
              onClick={onReset}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;