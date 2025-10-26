import React from 'react';

const VehicleTable = ({ vehicles, loading, onEdit, onDelete }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      available: { class: 'bg-success', text: 'Available' },
      booked: { class: 'bg-warning', text: 'Booked' },
      maintenance: { class: 'bg-danger', text: 'Maintenance' }
    };
    
    const config = statusConfig[status] || statusConfig.available;
    return <span className={`badge ${config.class}`}>{config.text}</span>;
  };

  if (loading) {
    return (
      <div className="text-center p-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Vehicles List</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Type</th>
                <th>Price/Day</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    No vehicles found
                  </td>
                </tr>
              ) : (
                vehicles.map(vehicle => (
                  <tr key={vehicle.id}>
                    <td>{vehicle.make}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.year}</td>
                    <td>
                      <span className="badge bg-info text-dark text-capitalize">
                        {vehicle.type}
                      </span>
                    </td>
                    <td>${vehicle.pricePerDay}</td>
                    <td>{getStatusBadge(vehicle.status)}</td>
                    <td>
                      <div className="btn-group">
                        <button 
                          onClick={() => onEdit(vehicle.id)}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => onDelete(vehicle.id)}
                          className="btn btn-sm btn-outline-danger"
                          disabled={vehicle.status === 'booked'}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleTable;