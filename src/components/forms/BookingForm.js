import React, { useState, useEffect } from 'react';
import Button from '../Ui/Button';

const BookingForm = ({ vehicles = [], booking }) => {
  const [formData, setFormData] = useState({
    vehicleId: booking?.vehicleId || '',
    startDate: booking?.startDate ? booking.startDate.split('T')[0] : '',
    endDate: booking?.endDate ? booking.endDate.split('T')[0] : '',
    customerName: booking?.customerName || '',
    customerEmail: booking?.customerEmail || '',
    customerPhone: booking?.customerPhone || ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Pre-fill form if booking exists
  useEffect(() => {
    if (booking) {
      setFormData({
        vehicleId: booking.vehicleId,
        startDate: booking.startDate.split('T')[0],
        endDate: booking.endDate.split('T')[0],
        customerName: booking.customerName,
        customerEmail: booking.customerEmail,
        customerPhone: booking.customerPhone
      });
    }
  }, [booking]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Simple validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.vehicleId) newErrors.vehicleId = 'Vehicle is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (formData.startDate && formData.endDate && formData.endDate < formData.startDate) {
      newErrors.endDate = 'End date cannot be before start date';
    }
    if (!formData.customerName) newErrors.customerName = 'Customer name is required';
    if (!formData.customerEmail) newErrors.customerEmail = 'Email is required';
    if (!formData.customerPhone) newErrors.customerPhone = 'Phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // API अभी नहीं बनी, तो console.log
    console.log('Submitting booking:', formData);

    setTimeout(() => {
      setLoading(false);
      alert(booking ? 'Booking updated!' : 'Booking created!');
    }, 1000);
  };

  // Filter available vehicles
  const availableVehicles = vehicles.filter(v => v.available || v.id === booking?.vehicleId);

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="vehicleId">Vehicle *</label>
        <select
          id="vehicleId"
          name="vehicleId"
          value={formData.vehicleId}
          onChange={handleChange}
          required
          disabled={!!booking} // edit mode me change nahi karenge
        >
          <option value="">Select a vehicle</option>
          {availableVehicles.map(v => (
            <option key={v.id} value={v.id}>
              {v.make} {v.model} ({v.year})
            </option>
          ))}
        </select>
        {errors.vehicleId && <span className="error">{errors.vehicleId}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="startDate">Start Date *</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
          {errors.startDate && <span className="error">{errors.startDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date *</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            min={formData.startDate || new Date().toISOString().split('T')[0]}
            required
          />
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="customerName">Customer Name *</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        {errors.customerName && <span className="error">{errors.customerName}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="customerEmail">Email *</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            required
          />
          {errors.customerEmail && <span className="error">{errors.customerEmail}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="customerPhone">Phone *</label>
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            value={formData.customerPhone}
            onChange={handleChange}
            required
          />
          {errors.customerPhone && <span className="error">{errors.customerPhone}</span>}
        </div>
      </div>

      <div className="form-actions">
        <Button type="submit" loading={loading}>
          {booking ? 'Update Booking' : 'Create Booking'}
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
