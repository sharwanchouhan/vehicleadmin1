import React from 'react';

const VehicleCard = ({ vehicle, onEdit, onDelete }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      available: { class: 'bg-success', text: 'Available' },
      booked: { class: 'bg-warning', text: 'Booked' },
      maintenance: { class: 'bg-danger', text: 'Maintenance' }
    };
    
    const config = statusConfig[status] || statusConfig.available;
    return <span className={`badge ${config.class}`}>{config.text}</span>;
  };

  const getTypeIcon = (type) => {
    const icons = {
      car: '🚗',
      suv: '🚙',
      van: '🚐',
      truck: '🚚'
    };
    return icons[type] || '🚗';
  };

  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="card-title mb-0">
          {getTypeIcon(vehicle.type)} {vehicle.make} {vehicle.model}
        </h6>
        {getStatusBadge(vehicle.status)}
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
        
        {vehicle.features && vehicle.features.length > 0 && (
          <div>
            <strong>Features:</strong>
            <div className="mt-1">
              {vehicle.features.map((feature, index) => (
                <span key={index} className="badge bg-light text-dark me-1 mb-1">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="card-footer">
        <div className="btn-group w-100">
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
      </div>
    </div>
  );
};

export default VehicleCard;