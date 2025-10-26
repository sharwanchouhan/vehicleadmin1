// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import VehicleForm from '../../forms/VehicleForm';
// // import { vehicleAPI } from '../../services/api';
// import { useNotification } from '../../Context/NotificationContext';

// const AddVehicle = () => {
//       const { id } = useParams();
//       const navigate = useNavigate();
//       const { showNotification } = useNotification();
//       const [vehicle, setVehicle] = useState(null);
//       const [loading, setLoading] = useState(false);

//       const isEdit = !!id;

//       useEffect(() => {
//         if (isEdit) {
//           fetchVehicle();
//         }
//       }, [id]);

//       const fetchVehicle = async () => {
//         try {
//           const vehicleData = await vehicleAPI.getVehicle(id);
//           setVehicle(vehicleData);
//         } catch (error) {
//           showNotification('Error', 'Failed to load vehicle data', 'error');
//         }
//       };

//       const handleSubmit = async (formData) => {
//         setLoading(true);
//         try {
//           if (isEdit) {
//             await vehicleAPI.updateVehicle(id, formData);
//             showNotification('Success', 'Vehicle updated successfully', 'success');
//           } else {
//             await vehicleAPI.createVehicle(formData);
//             showNotification('Success', 'Vehicle added successfully', 'success');
//           }
//           navigate('/vehicles');
//         } catch (error) {
//           showNotification('Error', error.message, 'error');
//         } finally {
//           setLoading(false);
//         }
//       };

//       const handleCancel = () => {
//         navigate('/vehicles');
//       };

//     return (
//         <div className="container-fluid">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h1>{isEdit ?  'Edit Vehicle' : 'Add New Vehicle'}</h1>
//                 <button onClick={handleCancel} className="btn btn-secondary">
             
//                     ← Back to Vehicles
//                 </button> 
//             </div>

//             <div className="row justify-content-center">
//                 <div className="col-lg-8">
//           <VehicleForm 
//             vehicle={vehicle}
//             onSubmit={handleSubmit}
//             onCancel={handleCancel}
//             isLoading={loading}
//           />
//         </div>
//             </div>
//         </div>
//     );
// };

// export default AddVehicle;






import React, { useState, useEffect } from 'react';

const VehicleForm = ({ vehicle, onSubmit, onCancel, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    color: '',
    registrationNumber: '',
    type: '',
  });

  useEffect(() => {
    if (vehicle) {
      setFormData(vehicle);
    }
  }, [vehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Vehicle Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter vehicle name"
          disabled={isLoading}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Model</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter model"
          disabled={isLoading}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Color</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter color"
          disabled={isLoading}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Registration Number</label>
        <input
          type="text"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter registration number"
          disabled={isLoading}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="form-select"
          disabled={isLoading}
        >
          <option value="">Select type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Van">Van</option>
        </select>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Submit'}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default VehicleForm;
