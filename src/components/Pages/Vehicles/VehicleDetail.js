import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCategory, deleteCategory } from '../../Sevices/api';
// import Spinner from '../../Spinner';
// import Alert from '../../Alert';

const VehicleDetail = () => {


  return (
    <div className="category-detail">
      <div className="page-header">
        {/* <h2>{category.name}</h2> */}
        <h2></h2>
        {/* <div className="action-buttons">
          <Link to={`/categories/edit`} className="btn btn-edit">Edit</Link>
          <button  className="btn btn-delete">Delete</button>
        </div> */}
      </div>
      
      {/* {error && <Alert type="error" message={error} onClose={() => setError(null)} />} */}
      
      <div className="category-info">
        <p><strong>Description:</strong> </p>
      </div>
      
      <div className="back-link">
        <Link to="/categories">← Back to Categories</Link>
      </div>
    </div>
  );
};

export default VehicleDetail;