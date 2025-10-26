// src/context/AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  theme: 'light',
  language: 'en',
  sidebarCollapsed: false,
  currentPage: 'dashboard',
  userPreferences: {
    notifications: true,
    emailUpdates: false,
    darkMode: false
  },
  globalLoading: false,
  modal: {
    isOpen: false,
    type: null,
    data: null
  }
};

// Action types
const APP_ACTIONS = {
  SET_THEME: 'SET_THEME',
  SET_LANGUAGE: 'SET_LANGUAGE',
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_USER_PREFERENCES: 'SET_USER_PREFERENCES',
  SET_GLOBAL_LOADING: 'SET_GLOBAL_LOADING',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };

    case APP_ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };

    case APP_ACTIONS.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
      };

    case APP_ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };

    case APP_ACTIONS.SET_USER_PREFERENCES:
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload
        }
      };

    case APP_ACTIONS.SET_GLOBAL_LOADING:
      return {
        ...state,
        globalLoading: action.payload
      };

    case APP_ACTIONS.OPEN_MODAL:
      return {
        ...state,
        modal: {
          isOpen: true,
          type: action.payload.type,
          data: action.payload.data
        }
      };

    case APP_ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          isOpen: false,
          type: null,
          data: null
        }
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const actions = {
    setTheme: (theme) => {
      dispatch({ type: APP_ACTIONS.SET_THEME, payload: theme });
      // Save to localStorage
      localStorage.setItem('app-theme', theme);
    },

    setLanguage: (language) => {
      dispatch({ type: APP_ACTIONS.SET_LANGUAGE, payload: language });
      localStorage.setItem('app-language', language);
    },

    toggleSidebar: () => {
      dispatch({ type: APP_ACTIONS.TOGGLE_SIDEBAR });
    },

    setCurrentPage: (page) => {
      dispatch({ type: APP_ACTIONS.SET_CURRENT_PAGE, payload: page });
    },

    setUserPreferences: (preferences) => {
      dispatch({ type: APP_ACTIONS.SET_USER_PREFERENCES, payload: preferences });
      localStorage.setItem('user-preferences', JSON.stringify(preferences));
    },

    setGlobalLoading: (loading) => {
      dispatch({ type: APP_ACTIONS.SET_GLOBAL_LOADING, payload: loading });
    },

    openModal: (type, data = null) => {
      dispatch({ type: APP_ACTIONS.OPEN_MODAL, payload: { type, data } });
    },

    closeModal: () => {
      dispatch({ type: APP_ACTIONS.CLOSE_MODAL });
    }
  };

  // Initialize from localStorage on mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    const savedLanguage = localStorage.getItem('app-language');
    const savedPreferences = localStorage.getItem('user-preferences');

    if (savedTheme) {
      actions.setTheme(savedTheme);
    }

    if (savedLanguage) {
      actions.setLanguage(savedLanguage);
    }

    if (savedPreferences) {
      actions.setUserPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const value = {
    ...state,
    ...actions
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use app context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;