import React, { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';

const Notification = () => {
  const { notification, hideNotification } = useContext(NotificationContext);

  if (!notification) return null;

  const alertClass = `alert alert-${notification.type} alert-dismissible fade show`;

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <div className={alertClass} role="alert">
        <strong>{notification.title}</strong> {notification.message}
        <button 
          type="button" 
          className="btn-close" 
          onClick={hideNotification}
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Notification;