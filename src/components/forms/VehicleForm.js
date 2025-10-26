import React, { useState } from 'react';
import Button from '../Ui/Button';
// import './VehicleForm.css';

const VehicleForm = ({ vehicle, onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    make: vehicle?.make || '',
    model: vehicle?.model || '',
    year: vehicle?.year || '',
    type: vehicle?.type || 'sedan',
    pricePerDay: vehicle?.pricePerDay || '',
    available: vehicle?.available ?? true,
    features: vehicle?.features || []
  });

  const vehicleTypes = ['sedan', 'suv', 'truck', 'van', 'luxury'];
  const featuresList = ['GPS', 'Bluetooth', 'Backup Camera', 'Leather Seats', 'Sunroof'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="vehicle-form">
      <div className="form-group">
        <label htmlFor="make">Make *</label>
        <input
          type="text"
          id="make"
          name="make"
          value={formData.make}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="model">Model *</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="year">Year *</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min="1990"
            max={new Date().getFullYear() + 1}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type *</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            {vehicleTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="pricePerDay">Price per Day ($) *</label>
        <input
          type="number"
          id="pricePerDay"
          name="pricePerDay"
          value={formData.pricePerDay}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="form-group">
        <label>Features</label>
        <div className="features-grid">
          {featuresList.map(feature => (
            <label key={feature} className="feature-checkbox">
              <input
                type="checkbox"
                checked={formData.features.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
              />
              {feature}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          Available for booking
        </label>
      </div>

      <div className="form-actions">
        <Button type="submit" loading={loading}>
          {vehicle ? 'Update Vehicle' : 'Add Vehicle'}
        </Button>
      </div>
    </form>
  );
};

export default VehicleForm;