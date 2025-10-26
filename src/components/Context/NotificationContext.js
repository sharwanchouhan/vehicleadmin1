// src/context/NotificationContext.js
import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  notifications: [] // [{ id, type, title, message }]
};

// Action types
const NOTIFICATION_ACTIONS = {
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  REMOVE_NOTIFICATION: "REMOVE_NOTIFICATION",
  CLEAR_ALL: "CLEAR_ALL"
};

// Reducer
const notificationReducer = (state, action) => {
  switch (action.type) {
    case NOTIFICATION_ACTIONS.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };

    case NOTIFICATION_ACTIONS.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (n) => n.id !== action.payload
        )
      };

    case NOTIFICATION_ACTIONS.CLEAR_ALL:
      return { ...state, notifications: [] };

    default:
      return state;
  }
};

// Create context
const NotificationContext = createContext();

// Provider
export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  // Actions
  const showNotification = (type, title, message, timeout = 3000) => {
    const id = Date.now(); // simple unique id
    dispatch({
      type: NOTIFICATION_ACTIONS.ADD_NOTIFICATION,
      payload: { id, type, title, message }
    });

    // Auto dismiss after timeout
    if (timeout > 0) {
      setTimeout(() => removeNotification(id), timeout);
    }
  };

  const removeNotification = (id) => {
    dispatch({ type: NOTIFICATION_ACTIONS.REMOVE_NOTIFICATION, payload: id });
  };

  const clearAll = () => {
    dispatch({ type: NOTIFICATION_ACTIONS.CLEAR_ALL });
  };

  return (
    <NotificationContext.Provider
      value={{ ...state, showNotification, removeNotification, clearAll }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

export default NotificationContext;
