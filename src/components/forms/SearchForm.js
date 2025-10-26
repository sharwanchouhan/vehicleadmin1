import React, { useState, useEffect } from 'react';
import Button from '../Ui/Button';
// import { useForm } from 'react-hook-form';
// import { bookingAPI } from '../../services/api/bookingAPI';
// import { Button, LoadingSpinner } from '../Ui';
// import AvailabilityResults from './components/AvailabilityResults';

const SearchBook = () => {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const [loading, setLoading] = useState(false);
  // const [searching, setSearching] = useState(false);
  // const [vehicles, setVehicles] = useState([]);
  // const [notification, setNotification] = useState(null);

  // const watchFromPincode = watch('fromPincode');
  // const watchToPincode = watch('toPincode');

  // Calculate estimated duration in real-time
  // const [estimatedDuration, setEstimatedDuration] = useState(0);

  // useEffect(() => {
  //   if (watchFromPincode && watchToPincode) {
  //     const duration = calculateRideDuration(watchFromPincode, watchToPincode);
  //     setEstimatedDuration(duration);
  //   }
  // }, [watchFromPincode, watchToPincode]);

  // const calculateRideDuration = (fromPincode, toPincode) => {
  //   return Math.abs(parseInt(toPincode) - parseInt(fromPincode)) % 24;
  // };

  // const onSearch = async (data) => {
  //   setSearching(true);
  //   try {
  //     const response = await bookingAPI.searchAvailableVehicles(data);
  //     setVehicles(response.data);
  //   } catch (error) {
  //     setNotification({ type: 'error', message: 'Search failed. Please try again.' });
  //   } finally {
  //     setSearching(false);
  //   }
  // };

  // const onBookVehicle = async (vehicleId) => {
  //   setLoading(true);
  //   try {
  //     const bookingData = {
  //       vehicleId,
  //       fromPincode: watchFromPincode,
  //       toPincode: watchToPincode,
  //       startTime: watch('startTime'),
  //       customerId: 'customer-123' // Hardcoded for demo
  //     };
      
  //     await bookingAPI.createBooking(bookingData);
  //     setNotification({ type: 'success', message: 'Booking confirmed successfully!' });
  //     setVehicles([]); // Clear results after booking
  //   } catch (error) {
  //     setNotification({ 
  //       type: 'error', 
  //       message: error.response?.data?.message || 'Booking failed. Vehicle may be unavailable.' 
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="search-book-container">
      <h2>Search & Book Vehicles</h2>
      
      {/* <Notification notification={notification} onClose={() => setNotification(null)} /> */}
      {/* <Notification /> */}
      
      <div className="search-section">
        <form  className="search-form">
          <div className="form-row">
            <div className="form-group">
              <label>Capacity Required (KG) *</label>
              <input
                type="number"
                // {...register('capacityRequired', { 
                //   required: 'Capacity is required',
                //   min: 1 
                // })}
              />
            </div>

            <div className="form-group">
              <label>From Pincode *</label>
              <input
                // {...register('fromPincode', { 
                //   required: 'From pincode is required',
                //   pattern: /^\d{6}$/ 
                // })}
                placeholder="6-digit pincode"
              />
            </div>

            <div className="form-group">
              <label>To Pincode *</label>
              <input
                // {...register('toPincode', { 
                //   required: 'To pincode is required',
                //   pattern: /^\d{6}$/ 
                // })}
                placeholder="6-digit pincode"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date & Time *</label>
              {/* <DatePicker
                {...register('startTime', { required: 'Start time is required' })}
                showTimeSelect
              /> */}
            </div>

            {/* {estimatedDuration > 0 && (
              <div className="duration-info">
                <strong>Estimated Duration: {estimatedDuration} hours</strong>
              </div>
            )} */}
          </div>

          <Button type="submit">
            {/* {searching ? <LoadingSpinner size="small" /> : 'Search Availability'} */}
          </Button>
        </form>
      </div>

      {/* {vehicles.length > 0 && (
        <AvailabilityResults 
          vehicles={vehicles} 
          onBook={onBookVehicle} 
          loading={loading}
          estimatedDuration={estimatedDuration}
        />
      )} */}
    </div>
  );
};

export default SearchBook;